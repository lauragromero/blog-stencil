import { Component, ComponentInterface, Event, EventEmitter, h, Prop } from '@stencil/core';
import { textLengt, transformDate } from '../../utils/utils';

@Component({
  tag: 'post-component',
  styleUrl: 'post-component.css',
  shadow: true,
})
export class PostComponent implements ComponentInterface {

  @Prop() titlePost;
  @Prop() usernamePost: string;
  @Prop() datePost: string;
  @Prop() nicknamePost: string;
  @Prop() textPost: string;
  @Event() selectPost: EventEmitter;

  onSelect() {
    this.selectPost.emit();
  }
  
  render() {
    return (
      <div class="card__container">
        <div class="card__image">
          <img src="https://cdn.pixabay.com/photo/2020/05/01/19/07/tulips-5118757_1280.jpg" alt="image"/>
        </div>
        <h3 class="card__title">{this.titlePost}</h3>
        <span class="card__date"> {transformDate(this.datePost)} by {this.usernamePost}</span>
        <p class="card__content"> {textLengt(this.textPost)}</p>
        <button class="card__button" onClick={() => this.onSelect()}>Read More</button>
      </div>
    );
  }

}
