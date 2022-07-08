import { MenuItem } from '../components/my-tabs/my-tabs.component';
import { Option1Component } from '../components/option1/option1.component';
import { Option2Component } from '../components/option2/option2.component';
import { Option3Component } from '../components/option3/option3.component';
import { Option4Component } from '../components/option4/option4.component';
import { Option5Component } from '../components/option5/option5.component';

export const menuOptions: MenuItem[] = [
  {
    id: 1,
    label: 'Option 1/2',
    children: [
      {
        id: 2,
        label: 'Option 1',
        htmlId: 'app-option1',
        componentType: Option1Component,
        tag: 'app-option1',
      },
      {
        id: 3,
        label: 'Option 2',
        htmlId: 'app-option2',
        componentType: Option2Component,
        tag: 'app-option2',
      },
    ],
  },
  {
    id: 4,
    label: 'Option 3',
    htmlId: 'app-option3',
    componentType: Option3Component,
    tag: 'app-option3',
  },
  {
    id: 5,
    label: 'Option 4/5',
    children: [
      {
        id: 6,
        label: 'Option 4',
        htmlId: 'app-option4',
        componentType: Option4Component,
        tag: 'app-option4',
      },
      {
        id: 7,
        label: 'Option 5',
        htmlId: 'app-option5',
        componentType: Option5Component,
        tag: 'app-option5',
      },
    ],
  },
];
