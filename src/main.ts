import './style.css';

import sushiLogo from '../assets/sushi.png';
import { sushiCuts, type SushiCut } from './data/sushiCuts';

const MAX_SUGGESTIONS = 6;

export function renderApp(root: HTMLElement): void {
  root.innerHTML = `
    <main>
      <div class="brand" id="brand">
        <img src="${sushiLogo}" alt="Sushi Dictionary logo" class="logo" />
        <h1>sushi dictionary</h1>
      </div>
      <form role="search">
        <input
          type="search"
          name="query"
          aria-label="Search for sushi cuts"
          placeholder="Search for otoro, kamatoro, uni..."
          autocomplete="off"
        />
      </form>
      <div
        class="suggestions hidden"
        id="cut-suggestions"
        role="listbox"
        aria-label="Sushi cut suggestions"
      ></div>
      <section class="cut-card hidden" id="cut-card" aria-live="polite"></section>
    </main>
  `;

  const brand = root.querySelector<HTMLDivElement>('#brand');
  const input = root.querySelector<HTMLInputElement>('input[type="search"]');
  const suggestions = root.querySelector<HTMLDivElement>('#cut-suggestions');
  const card = root.querySelector<HTMLElement>('#cut-card');
  const searchForm = root.querySelector<HTMLFormElement>('form[role="search"]');

  if (!brand || !input || !suggestions || !card || !searchForm) {
    throw new Error('Failed to initialise sushi dictionary UI');
  }

  const hideResults = (): void => {
    suggestions.classList.add('hidden');
    card.classList.add('hidden');
    suggestions.replaceChildren();
    card.replaceChildren();
  };

  const updateResults = (query: string): SushiCut | undefined => {
    const trimmed = query.trim();
    if (!trimmed) {
      hideResults();
      return undefined;
    }

    const filtered = filterCuts(trimmed);
    renderSuggestions(suggestions, filtered, trimmed);

    suggestions.classList.remove('hidden');

    const match = findBestMatch(trimmed, filtered);

    if (match) {
      renderCutCard(card, match);
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
      card.replaceChildren();
    }

    return match;
  };

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = input.value.trim();
    const match = updateResults(query);
    if (match) {
      input.value = match.cut;
    }
  });

  suggestions.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const cutName = target.closest<HTMLButtonElement>('[data-cut]')?.dataset.cut;
    if (!cutName) {
      return;
    }

    const match = sushiCuts.find((cut) => cut.cut === cutName);
    if (!match) {
      return;
    }

    input.value = match.cut;
    updateResults(match.cut);
  });

  input.addEventListener('input', () => {
    updateResults(input.value);
  });

  hideResults();
}

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('Root element "#app" was not found');
}

renderApp(app);

function renderSuggestions(
  container: HTMLElement,
  filtered: SushiCut[],
  query: string
): void {
  if (!filtered.length) {
    const placeholder = document.createElement('p');
    placeholder.className = 'empty-state';
    placeholder.setAttribute('role', 'status');
    placeholder.textContent = `No cuts match "${query}".`;
    container.replaceChildren(placeholder);
    return;
  }

  const fragment = document.createDocumentFragment();

  filtered.forEach((cut) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'suggestion';
    button.dataset.cut = cut.cut;
    button.setAttribute('role', 'option');

    const cutLabel = document.createElement('span');
    cutLabel.className = 'suggestion-cut';
    cutLabel.textContent = cut.cut;

    const fishLabel = document.createElement('span');
    fishLabel.className = 'suggestion-fish';
    fishLabel.textContent = cut.fish;

    button.append(cutLabel, fishLabel);
    fragment.append(button);
  });

  container.replaceChildren(fragment);
}

function renderCutCard(container: HTMLElement, cut: SushiCut): void {
  const heading = document.createElement('h2');
  heading.textContent = cut.cut;

  const list = document.createElement('dl');
  const sections: HTMLDivElement[] = [
    createDefinition('Fish', cut.fish),
    createDefinition('Origin', cut.origin),
    createDefinition('Taste', cut.taste),
    createDefinition('Texture', cut.texture)
  ];

  if (cut.notes) {
    sections.push(createDefinition('Notes', cut.notes));
  }

  list.append(...sections);

  container.replaceChildren(heading, list);
}

function filterCuts(query: string): SushiCut[] {
  const trimmed = query.toLowerCase();
  return sushiCuts
    .filter((cut) => cut.cut.toLowerCase().includes(trimmed))
    .slice(0, MAX_SUGGESTIONS);
}

function findBestMatch(query: string, matches: SushiCut[]): SushiCut | undefined {
  if (!matches.length) {
    return undefined;
  }

  const lower = query.toLowerCase();
  return matches.find((cut) => cut.cut.toLowerCase() === lower) ?? matches[0];
}

function createDefinition(term: string, detail: string): HTMLDivElement {
  const wrapper = document.createElement('div');
  const label = document.createElement('dt');
  label.textContent = term;
  const value = document.createElement('dd');
  value.textContent = detail;

  wrapper.append(label, value);
  return wrapper;
}
