import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import { transformDate, transformTime } from '../../utils/utils';

@Component({
  tag: 'detail-card',
  styleUrl: 'detail-card.css',
  shadow: true,
})
export class DetailCard implements ComponentInterface {

  @Prop() detailTitle: string;
  @Prop() detailDate: string;
  @Prop() detailAuthor: string;
  @Prop() detailText: string;


  render() {
    return (
      <Host>
        <h2 class="detail__title">{this.detailTitle}</h2>
        <span class="detail__author"> Written by {this.detailAuthor}</span>
        <span class="detail__date">{transformDate(this.detailDate)}, {transformTime(this.detailDate)}</span>
        <p class="detail__text">{this.detailText}</p>
      </Host>
    );
  }

}
