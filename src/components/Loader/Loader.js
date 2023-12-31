// import { LoaderStyled, Covers } from './Loader.styled';

// const Loader = () => {
//   return (
//     <section>
//       <LoaderStyled>
//         <span>L</span>
//         <span>O</span>
//         <span>A</span>
//         <span>D</span>
//         <span>I</span>
//         <span>N</span>
//         <span>G</span>
//         <Covers>
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//         </Covers>
//       </LoaderStyled>
//     </section>
//   );
// };

// export default Loader;

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
    </section>
  );
};

export default Loader;
