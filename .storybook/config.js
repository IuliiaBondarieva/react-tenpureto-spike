import { configure } from '@storybook/react';
import '../src/common/yupDefaultLocale';

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.tsx$/), module);
