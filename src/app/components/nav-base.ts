import { Output, EventEmitter, Component } from '@angular/core';
import { DocumentItem } from '@/interfaces/manifest';
import { NavigateEventSource, NavigateEvent } from '@/interfaces/navigate';

/**
 * 导航控件的基类
 */
@Component({
    template: '',
})
export class NavBaseComponent implements NavigateEventSource {
    /** @inheritdoc */
    @Output() readonly navigate = new EventEmitter<NavigateEvent>();

    /**
     * 触发导航事件
     */
    onNavigate(item?: DocumentItem, event?: Event): void {
        if (!item) return;
        event?.preventDefault();
        if (item.path) {
            this.navigate.next(new NavigateEvent(item.path.parsed.file));
        } else {
            this.onNavigate(item.children[0]);
        }
    }

    /** 文档 URL */
    url(item?: DocumentItem): string {
        if (!item) return '';
        if (item.path) {
            return item.path.parsed.file;
        } else {
            return this.url(item.children[0]);
        }
    }
}
