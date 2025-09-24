import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { getConfig } from '@edx/frontend-platform';

import messages from './messages';

const Head = () => {
  const intl = useIntl();
  return (
    <>
      <title>
        {intl.formatMessage(messages['profile.page.title'], {
          siteName: getConfig().SITE_NAME,
        })}
      </title>
      <link
        rel="shortcut icon"
        href={getConfig().FAVICON_URL}
        type="image/x-icon"
      />
    </>
  );
};

export default Head;
