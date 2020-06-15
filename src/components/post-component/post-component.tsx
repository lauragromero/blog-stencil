import { Component, ComponentInterface, Event, EventEmitter, h, Host, Prop } from '@stencil/core';


// const texto = 'Charles Robert Darwin (Shrewsbury, 12 de febrero de 1809-Down House, 19 de abril de 1882) fue un naturalista inglés, reconocido por ser el científico más influyente (y el primero, compartiendo este logro de forma independiente con Alfred Russel Wallace) de los que plantearon la idea de la evolución biológica a través de la selección natural, justificándola en su obra El origen de las especies (1859) con numerosos ejemplos extraídos de la observación de la naturaleza. Postuló que todas las especies de seres vivos han evolucionado con el tiempo a partir de un antepasado común mediante un proceso denominado selección natural. La evolución fue aceptada como un hecho por la comunidad científica y por buena parte del público en vida de D'


@Component({
  tag: 'post-component',
  styleUrl: 'post-component.css',
  shadow: true,
})
export class PostComponent implements ComponentInterface {

  @Prop() titlePost: string;
  @Prop() usernamePost: string;
  @Prop() datePost: string;
  @Prop() nicknamePost: string;
  @Prop() textPost: string;
  @Event() selectPost: EventEmitter;

  onSelect() {
    this.selectPost.emit();
  }
  textLengt(text){
      const textCut = text.substr(0, 200) + '...'
      return textCut

  };

  transformDate(datePost){
    const months=[
        'January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'
    ];
    const date= new Date(datePost);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const fullDate= `${months[month]} ${day}, ${year}`;
    return fullDate
  };

  render() {
    return (
      <Host>
      <div class="card__container">
        {/* <div class="card__image">
        <img src="https://cdn.pixabay.com/photo/2020/05/01/19/07/tulips-5118757_1280.jpg" alt="image"/>
        </div> */}
        <h3 class="card__title">{this.titlePost}</h3>
        <span class="card__date"> {this.transformDate(this.datePost)} by {this.usernamePost}</span>
        <p class="card__content"> {this.textLengt(this.textPost)}</p>
        <button class="card__button" onClick={() => this.onSelect()}>Read More</button>
      </div>
      </Host>
    );
  }

}
