export default function EditProfile(): React.JSX.Element {
  return (
    <form className="popup__form" name="edit-profile-form" noValidate>
      <input
        type="text"
        name="name"
        className="popup__input popup__input_type_name"
        placeholder="Nombre"
        id="name-input"
        minLength={2}
        maxLength={40}
        required
      />
      <span className="name-input-error popup__input-error"></span>
      <input
        className="popup__input popup__input_type_description"
        name="description"
        placeholder="Acerca de mí"
        type="text"
        id="description-input"
        minLength={2}
        maxLength={200}
        required
      />
      <span className="description-input-error popup__input-error"></span>
      <input
        type="url"
        name="profile-image"
        className="popup__input popup__input_type_profile-image"
        placeholder="Profile image"
        id="profile-image-input"
        required
      />
      <span className="profile-image-input-error popup__input-error"></span>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}