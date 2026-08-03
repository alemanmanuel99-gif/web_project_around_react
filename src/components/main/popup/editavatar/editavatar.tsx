export default function EditAvatar(): React.JSX.Element {
  return (
    <form className="popup__form" name="edit-avatar-form" noValidate>
      <input
        className="popup__input"
        type="url"
        name="avatar"
        id="avatar-link"
        placeholder="Enlace a la imagen"
        required
      />
      <span className="popup__input-error avatar-link-error"></span>
      <button className="popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}