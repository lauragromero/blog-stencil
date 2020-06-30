import { Component, ComponentInterface, Event, EventEmitter, h, Prop } from '@stencil/core';
import { textLengt } from '../../utils/utils';

@Component({
  tag: 'list-component',
  styleUrl: 'list-component.css',
  shadow: true,
})
export class ListComponent implements ComponentInterface{

  @Prop() titlePost;
  @Prop() usernamePost: string;
  @Prop() datePost: string;
  @Prop() nicknamePost: string;
  @Prop() textPost: string;
  @Event() selectPost: EventEmitter;
  dateNew: Date; 
  day: number;
  months: number;
  month: string;
  year: number;

  onSelect() {
    this.selectPost.emit();
  }

  componentWillRender(){
    const stringMonth=[
      'January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'
  ];
    this.dateNew = new Date(this.datePost);
    this.day = this.dateNew.getDate();
    this.months =  this.dateNew.getMonth();
    this.month = `${stringMonth[this.months]}`;
    this.year =  this.dateNew.getFullYear();

  }
  
  render() {
    
    return (
      <div class="card__container">
        {/* <div class="card__image">
          <img src="https://cdn.pixabay.com/photo/2020/05/01/19/07/tulips-5118757_1280.jpg" alt="image"/>
        </div> */}
        <div class="card__header">
          <div class="date__container">
            <span class="date__day"> {this.day}</span>
            <span class= "date__month">{this.month} {this.year}</span>
          </div>
          <h3 class="card__title">{this.titlePost}</h3>
        </div>
        <p class="card__content"> {textLengt(this.textPost)}</p>
        <button class="card__button" onClick={() => this.onSelect()}>Read More</button>
      </div>
    );
  }

}

