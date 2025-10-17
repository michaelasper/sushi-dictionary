import { beforeEach, describe, expect, it, vi } from 'vitest';

describe('Sushi Dictionary entrypoint', () => {
  beforeEach(() => {
    vi.resetModules();
    document.body.innerHTML = '<div id="app"></div>';
  });

  it('renders a search field', async () => {
    await import('./main');
    const searchInput = document.querySelector<HTMLInputElement>('input[type="search"]');

    expect(searchInput).toBeTruthy();
    expect(searchInput?.getAttribute('placeholder')).toContain('Search');
  });

  it('shows brand but hides results until typing', async () => {
    await import('./main');
    const brand = document.querySelector('.brand');
    const suggestions = document.querySelector('#cut-suggestions');
    const card = document.querySelector('#cut-card');

    expect(brand?.classList.contains('hidden')).toBe(false);
    expect(suggestions?.classList.contains('hidden')).toBe(true);
    expect(card?.classList.contains('hidden')).toBe(true);
  });

  it('filters suggestions based on the cut name', async () => {
    await import('./main');
    const input = document.querySelector<HTMLInputElement>('input[type="search"]');

    expect(input).toBeTruthy();
    if (!input) {
      return;
    }

    input.value = 'oto';
    input.dispatchEvent(new Event('input', { bubbles: true }));

    const suggestions = document.querySelector('#cut-suggestions');
    expect(suggestions?.classList.contains('hidden')).toBe(false);
    const firstSuggestion = document.querySelector('.suggestion-cut');
    expect(firstSuggestion?.textContent).toContain('Otoro');
  });

  it('updates the cut card when a suggestion is picked', async () => {
    await import('./main');
    const input = document.querySelector<HTMLInputElement>('input[type="search"]');

    expect(input).toBeTruthy();
    if (!input) {
      return;
    }

    input.value = 'uni';
    input.dispatchEvent(new Event('input', { bubbles: true }));

    const suggestionButton = document.querySelector<HTMLButtonElement>(
      '.suggestion[data-cut="Uni"]'
    );

    expect(suggestionButton).toBeTruthy();
    suggestionButton?.click();

    const cardTitle = document.querySelector('.cut-card h2');
    expect(cardTitle?.textContent).toBe('Uni');
    const card = document.querySelector('.cut-card');
    expect(card?.classList.contains('hidden')).toBe(false);
  });
});
