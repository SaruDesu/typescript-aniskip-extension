import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BaseRenderer } from '../base-renderer';
import { SkipTimeIndicatorContainer } from '../../components';
import { Store } from '../../data';
import { Player } from '../../players/base-player.types';
import { PlayerProvider, VariantProvider } from '../../utils';

export class SkipTimeIndicatorsRenderer extends BaseRenderer {
  variant: string;

  store: Store;

  player: Player;

  constructor(id: string, variant: string, store: Store, player: Player) {
    super(id);

    this.variant = variant;
    this.store = store;
    this.player = player;

    const reactRoot = this.shadowRoot.getElementById(this.reactRootId);
    if (reactRoot) {
      reactRoot.style.width = '100%';
      reactRoot.style.height = '100%';
    }
  }

  render(): void {
    ReactDOM.render(
      <Provider store={this.store}>
        <PlayerProvider value={this.player}>
          <VariantProvider value={this.variant}>
            <SkipTimeIndicatorContainer />
          </VariantProvider>
        </PlayerProvider>
      </Provider>,
      this.shadowRoot.getElementById(this.reactRootId)
    );
  }
}
