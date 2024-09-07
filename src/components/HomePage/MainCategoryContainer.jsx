import MainCategory from "./UI/MainCategory.jsx";
import { useSelector } from "react-redux";

function MainCategoryContainer() {
  // Fetching main categories from the Redux store
  const mainCategoryList = useSelector((state) => state.mainCategorySlice);

  // Optional: You could handle loading or error states if necessary
  const isLoading = useSelector((state) => state.mainCategorySlice.isLoading);
  const hasError = useSelector((state) => state.mainCategorySlice.error);

  if (isLoading) {
    return <div>Loading categories...</div>;
  }

  if (hasError) {
    return <div>Error loading categories. Please try again later.</div>;
  }

  return (
    <div className="hideScrollbar mt-6 overflow-scroll flex gap-20 justify-left">
      {mainCategoryList?.length > 0 ? (
        mainCategoryList.map((mainCategory) => {
          // Check if mainCategory and its subCategories exist
          if (mainCategory && mainCategory.subCategories?.[0]) {
            return (
              <MainCategory
                key={mainCategory.id}
                firstSubCategoryId={mainCategory.subCategories[0].id}
                name={mainCategory.name}
                id={mainCategory.id}
                image={mainCategory.image}
              />
            );
          }
          return null; // Skip rendering if the condition is not met
        })
      ) : (
        <div>No categories available</div> // Display a message when no categories exist
      )}
    </div>
  );
}

export default MainCategoryContainer;
