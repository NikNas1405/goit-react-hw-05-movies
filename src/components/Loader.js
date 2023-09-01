// import { LoaderStyled, Covers } from './Loader.styled';

// const Loader = () => {
//   return (
//     <section>
//       <LoaderStyled class="loader">
//         <span>L</span>
//         <span>O</span>
//         <span>A</span>
//         <span>D</span>
//         <span>I</span>
//         <span>N</span>
//         <span>G</span>

//         <Covers class="covers">
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//         </Covers>
//       </LoaderStyled>
//       ;
//     </section>
//   );
// };

import css from './Loader.module.css';

const Loader = () => {
  return (
    <section>
      <div className={css.loader}>
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>

        <div className={css.covers}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      ;
    </section>
  );
};

export default Loader;
