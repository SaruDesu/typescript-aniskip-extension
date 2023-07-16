import { BasePage } from '../base-page';
import { Metadata } from '../base-page.types';
import metadata from './metadata.json';

export class Marin extends BasePage {
  static getMetadata(): Metadata {
    return metadata;
  }

  getIdentifier(): string {
    const urlRegex = /\/anime\/(\w+)\//;
    const match = window.location.href.match(urlRegex);
    if (match) {
     return match[1];
    }
    return '';
  }


  getTitle(): string {
    const titleElement = document.querySelector('h1 > a[href*="/anime/"]');
    if (titleElement) {
      const title = titleElement.textContent || '';
      return title;
    }
    return '';
  }

  getRawEpisodeNumber(): number {
    const episodeNumber = document.title.match(/Episode (\d+)/)?.[1] ?? '1';
    return parseFloat(episodeNumber);
  } 
}
