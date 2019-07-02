import * as React from 'react';
import { BlockProps } from './Base';
interface TextProps extends BlockProps {
    ellipsis?: boolean;
}
declare const Text: React.SFC<TextProps>;
export default Text;
