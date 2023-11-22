import { genCSSVarRegister } from '../../theme/internal';
import { prepareComponentToken } from '.';

export default genCSSVarRegister('Button', prepareComponentToken, {
  unitless: {
    fontWeight: true,
  },
});