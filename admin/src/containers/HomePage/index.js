/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import PluginLogo from '../../components/pluginLogo'

const HomePage = () => {
  return (
    <div style={{height: `calc(100vh - 6rem)`,display: `flex`, flexDirection: `column`, alignItems: `center`, justifyContent: `center`}}>
      <PluginLogo width={`100%`} style={{marginBottom: `1rem`}} />
      <p>At the moment, the functionality of this page is being actively developed.</p>
    </div>
  );
};

export default memo(HomePage);
