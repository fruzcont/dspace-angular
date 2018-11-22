import { Component, Inject } from '@angular/core';
import { Item } from '../../../../core/shared/item.model';
import { hasValue } from '../../../empty.util';
import { ITEM } from '../../../entities/switcher/entity-type-switcher.component';
import { ItemSearchResult } from '../../../object-collection/shared/item-search-result.model';
import { TruncatableService } from '../../../truncatable/truncatable.service';
import { SearchResultListElementComponent } from '../../search-result-list-element/search-result-list-element.component';

/**
 * A generic component for displaying entity list elements
 */
@Component({
  selector: 'ds-entity-search-result',
  template: ''
})
export class EntitySearchResultComponent extends SearchResultListElementComponent<ItemSearchResult, Item> {
  item: Item;

  constructor(
    protected truncatableService: TruncatableService,
    @Inject(ITEM) public obj: Item | ItemSearchResult,
  ) {
    super(undefined, truncatableService);
    if (hasValue((obj as any).dspaceObject)) {
      this.object = obj as ItemSearchResult;
      this.dso = this.object.dspaceObject;
    } else {
      this.object = {
        dspaceObject: obj as Item,
        hitHighlights: []
      };
      this.dso = obj as Item;
    }
    this.item = this.dso;
  }
}
