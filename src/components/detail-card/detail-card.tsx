import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

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

  transformDate(dateNew){
    const months=[
        'January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'
    ];
    const date= new Date(dateNew);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const timeHour = date.getHours()
    const timeMinute= date.getMinutes()
    const am = timeHour < 12 ? 'A.M.' : 'P.M.';
    const fullDate= `${months[month]} ${day}, ${year}, ${timeHour}:${timeMinute} ${am}`;
    return fullDate
  };

  render() {
    return (
      <Host>
        <h2 class="detail__title">{this.detailTitle}</h2>
        <span class="detail__author"> Written by {this.detailAuthor}</span>
        <span class="detail__date">{this.transformDate(this.detailDate)}</span>
        <p class="detail__text">{this.detailText}</p>
      </Host>
    );
  }

}
