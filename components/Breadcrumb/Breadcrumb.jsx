import { Children } from "react";
import { Fragment } from "react";
import styles from './Breadcrumb.module.scss'
const Breadcrumb = ({ children }) => {
  const childrenArray = Children.toArray(children);

  const childrenWtihSeperator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return (
        <Fragment key={index}>
          {child}
          <span>/</span>
        </Fragment>
      );
    }
    return child;
  });

  return (
    <nav className={styles.section_breadcrumbs} aria-label="breadcrumb">
      <ul className={styles.breadcrumbs}>{childrenWtihSeperator}</ul>
    </nav>
  );
};

export default Breadcrumb;
