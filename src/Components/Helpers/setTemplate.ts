import { TableTemplateType } from '../ITable';
import constant from '../constants';

export default function setTemplate(template: TableTemplateType) {
    return template === 'table' ? `${constant.GridTable}_template` : '';
}
