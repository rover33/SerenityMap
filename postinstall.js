/*
  This script moves the depricated Modal.propTypes into the modal wrapper code to make it compatible with RN 0.58
  This is a temporary workaround until the library is updated.

  https://github.com/raynor85/react-native-modal-wrapper/issues/14#issue-407824066
*/


const fs = require('fs');
const path = require('path');

const modalWrapperIndexPath = path.resolve(__dirname, './node_modules/react-native-modal-wrapper/index.js');
let file = fs.readFileSync(modalWrapperIndexPath, { encoding: 'utf8' });

if (!file.includes('modalPropTypes')) {
    const proptypesImport = 'import PropTypes from \'prop-types\';';
    const modalPropTypes = `import PropTypes from 'prop-types';

  const modalPropTypes = {
    animationType: PropTypes.oneOf(['none', 'slide', 'fade']),
    presentationStyle: PropTypes.oneOf([
      'fullScreen',
      'pageSheet',
      'formSheet',
      'overFullScreen',
    ]),
    transparent: PropTypes.bool,
    hardwareAccelerated: PropTypes.bool,
    visible: PropTypes.bool,
    onRequestClose:
      Platform.isTV || Platform.OS === 'android'
        ? PropTypes.func.isRequired
        : PropTypes.func,
    onShow: PropTypes.func,
    onDismiss: PropTypes.func,
    supportedOrientations: PropTypes.arrayOf(
      PropTypes.oneOf([
        'portrait',
        'portrait-upside-down',
        'landscape',
        'landscape-left',
        'landscape-right',
      ]),
    ),
    onOrientationChange: PropTypes.func,
  };`;

    file = file.replace(proptypesImport, modalPropTypes);
    file = file.replace(/Modal.propTypes/g, 'modalPropTypes');

    fs.writeFileSync(modalWrapperIndexPath, file);
}