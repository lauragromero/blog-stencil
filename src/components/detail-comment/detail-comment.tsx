import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'detail-comment',
  styleUrl: 'detail-comment.css',
  shadow: true,
})
export class DetailComment implements ComponentInterface {
  @Prop() commentAuthor: string;
  @Prop() commentDate: string;
  @Prop() commentText: string;

  
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
    const am = timeHour < 12 ? 'a.m.' : 'p.m.';
    const fullDate= `${months[month]} ${day}, ${year} at ${timeHour}:${timeMinute} ${am}`;
    return fullDate
  };

  render() {
    return (
      <Host>
        <div class="comment__container">
        <p class="comment_details"><span class="comment__author">{this.commentAuthor} </span>
        <span>on </span>
        <span class="comment__date">{this.transformDate(this.commentDate)}</span></p>
        <p class="comment__text">{this.commentText}</p>
        </div>
      </Host>
    );
  }

}
