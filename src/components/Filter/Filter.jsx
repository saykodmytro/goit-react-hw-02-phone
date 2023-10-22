import css from './Filter.module.css';
export const Filter = ({ filter }) => {
  return (
    <label className={css.label}>
      <input
        className={css.input}
        type="text"
        placeholder="Search"
        onChange={filter}
      />
    </label>
  );
};
