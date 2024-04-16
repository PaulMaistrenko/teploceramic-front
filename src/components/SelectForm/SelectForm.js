import './select-form.scss';

export const SelectForm = () => {
  return (
    <div className="select__form text-color--neutralN300">
      <p className="select__title main__text--regular">10 items sorted by</p>
      <button className="select__field">Most recent</button>
    </div>
  );
}
