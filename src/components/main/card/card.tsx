import type { CardData, PopupConfig } from '../../../types/types.ts';
import ImagePopup from '../popup/imagepopup/imagepopup.tsx';

type CardProps = {
  card: CardData;
  onCardClick: (popup: PopupConfig) => void;
};

export default function Card(props: CardProps): React.JSX.Element {
  const { name, link } = props.card;
  const { card, onCardClick } = props;

  const imageComponent: PopupConfig = {
    children: <ImagePopup card={card} />,
  };

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => onCardClick(imageComponent)}
      />
      <button
        aria-label="Eliminar tarjeta"
        className="card__delete-button"
        type="button"
      ></button>
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Botón Me gusta"
          type="button"
          className="card__like-button"
        ></button>
      </div>
    </li>
  );
}