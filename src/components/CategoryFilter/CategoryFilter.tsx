import styles from "./CategoryFilter.module.css";

type CategoryFilterProps = {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
};

export function CategoryFilter({
  categories,
  activeCategory,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className={styles.scroller} aria-label="Filtrar por categoria">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={`${styles.chip} ${
            category === activeCategory ? styles.active : ""
          }`}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
