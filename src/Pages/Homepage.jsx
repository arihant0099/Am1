import React from "react";
import PageWrapper from "../Components/Wrapper & Cards/PageWrapper";
import TopBanner from "../Components/HomePage/UI/TopBanner";
import AdCarousel from "../Components/HomePage/AdCarousel";
import MainCategoryContainer from "../Components/HomePage/MainCategoryContainer";
import ProductCarousel from "../Components/HomePage/ProductCarousel";
import { useSelector } from "react-redux";

function Homepage() {
  const mainCategoryList = useSelector((state) => state.mainCategorySlice);

  return (
    <PageWrapper className="p-2">
      <TopBanner />
      <AdCarousel />
      <MainCategoryContainer />
      {mainCategoryList && mainCategoryList.length > 0 ? (
        mainCategoryList.map((mainCategory) => (
          mainCategory && mainCategory.subCategories && mainCategory.subCategories[0] ? (
            <ProductCarousel
              firstSubCategoryId={mainCategory.subCategories[0].id}
              key={mainCategory.id}
              title={mainCategory.name}
              mainCategoryId={mainCategory.id}
            />
          ) : null
        ))
      ) : (
        <p>No categories available.</p>
      )}
    </PageWrapper>
  );
}

export default Homepage;
