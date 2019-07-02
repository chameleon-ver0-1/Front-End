import { Context } from '@ant-design/create-react-context';
import { ColProps } from '../grid/col';
import { FormLabelAlign } from './FormItem';
export interface FormContextProps {
    vertical: boolean;
    colon?: boolean;
    labelAlign?: FormLabelAlign;
    labelCol?: ColProps;
    wrapperCol?: ColProps;
}
export declare const FormContext: Context<FormContextProps>;
