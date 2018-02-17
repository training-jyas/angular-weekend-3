import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    // selector: '[app-header]',
    // selector: '.app-header'
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @Output() featureSelected = new EventEmitter<string>();
    title = 'Handson';

    onSelect(feature) {
        this.featureSelected.emit(feature);
    }
}
