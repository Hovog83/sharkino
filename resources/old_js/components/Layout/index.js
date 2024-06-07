import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import s from "./layout.module.css";
import { getAllCategories } from "../../actions/category";
import { getProductesByCatSlug } from "../../actions/product";

function Layout() {
  const dispatch = useDispatch();
  const { category } = useSelector(({ category }) => ({
    category: category.categories
  }));
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const handleClick = useCallback(
    slug => {
      dispatch(getProductesByCatSlug(slug));
    },
    [dispatch]
  );

  return (
    <div className={s.layout}>
      <div className={s.title}>
        <h3>Категории</h3>
      </div>
      <div className={s.content}>
        <ul>
          {category.map(item => {
            return (
              <li className={s.category}>
                {item.name}
                <ul>
                  {item.subCategories.map(sub => (
                    <li className="sub">
                      <button onClick={() => handleClick(sub.slug)}>
                        {sub.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Layout;
