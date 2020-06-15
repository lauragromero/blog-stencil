import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import { transformDate, transformTime } from '../../utils/utils';

@Component({
  tag: 'detail-comment',
  styleUrl: 'detail-comment.css',
  shadow: true,
})
export class DetailComment implements ComponentInterface {
  @Prop() commentAuthor: string;
  @Prop() commentDate: string;
  @Prop() commentText: string;

  render() {
    return (
      <Host>
        <div class="comment__container">
        <p class="comment_details"><span class="comment__author">{this.commentAuthor} </span>
        <span>on </span>
        <span class="comment__date">{transformDate(this.commentDate)}, {transformTime(this.commentDate)}</span></p>
        <p class="comment__text">{this.commentText}</p>
        </div>
      </Host>
    );
  }

}
