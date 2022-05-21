import NumberLogo from './assets/numbers.svg';
import CallLogo from './assets/calls.svg';
import TeamLogo from './assets/teams.svg';
import UserLogo from './assets/users.svg';
import TagLogo from './assets/tags.svg';
import SettingsLogo from './assets/settings.svg';
import IntegrationLogo from './assets/integrations.svg';

export const menuItems = [
  {
    id:'services',
    title: 'Services',
    type: 'services',
    logo: SettingsLogo,
    submenu: [
      { name: 'Clean Numbers', id: 'clean-numbers', method: 'PATCH'},
      { name: 'Get Recordings', id: 'get-recordings', method: 'PATCH'},
      { name: 'CTI', id: 'cti', method: 'PATCH'}
    ]
  },
  {
    id:'users',
    title: 'Users',
    type: 'api',
    logo: UserLogo,
    submenu: [
      { name: 'All Users', id: 'all', method: 'GET', url: '' },
      { name: 'Retrieve User', id: 'find', method: 'GET', url: ':id' },
      { name: 'Create User', id: 'create', method: 'POST', url: '' },
      { name: 'Update User', id: 'update', method: 'PUT', url: ':id' },
      { name: 'Delete User', id: 'remove', method: 'DELETE', url: ':id' },
      { name: 'All Availabilities', id: 'all-available', method: 'GET', url: 'availabilities' },
      { name: 'Find Availability', id: 'find-available', method: 'GET', url: ':id/availability' },
      { name: 'Start Call', id: 'start-call', method: 'POST', url: ':id/calls' },
      { name: 'Dial Number', id: 'dial', method: 'POST', url: ':id/dial' }
    ]
  },
  {
    id:'teams',
    title: 'Teams',
    type: 'api',
    logo: TeamLogo,
    submenu: [
      { name: 'All Teams', id: 'all', method: 'GET', url: '' },
      { name: 'Retrieve Team', id: 'find', method: 'GET', url: ':id' },
      { name: 'Create Team', id: 'create', method: 'POST', url: '' },
      { name: 'Delete Team', id: 'remove', method: 'DELETE', url: ':id' },
      { name: 'Add Team User', id: 'add-user', method: 'POST', url: ':id/users/:user_id' },
      { name: 'Remove Team User', id: 'remove-user', method: 'DELETE', url: ':id/users:user_id' }
    ]
  },
  {
    id:'calls',
    title: 'Calls',
    type: 'api',
    logo: CallLogo,
    submenu: [
      { name: 'All Calls', id: 'all', method: 'GET', url: '' },
      { name: 'Retrieve Call', id: 'find', method: 'GET', url: ':id' },
      { name: 'Search Calls', id: 'search', method: 'GET', url: 'search' },
      { name: 'Transfer Call', id: 'transfer', method: 'POST', url: ':id/transfers' },
      { name: 'Comment Call', id: 'comment', method: 'POST', url: ':id/comments' },
      { name: 'Tag Call', id: 'tag', method: 'POST', url: ':id/tags' },
      { name: 'Archive Call', id: 'archive', method: 'PUT', url: ':id/archive' },
      { name: 'Unarchive Call', id: 'unarchive', method: 'PUT', url: ':id/unarchive' },
      { name: 'Pause Recording', id: 'pause-recording', method: 'POST', url: ':id/pause_recording' },
      { name: 'Resume Recording', id: 'resume-recording', method: 'POST', url: ':id/resume_recording' },
      { name: 'Delete Recording', id: 'remove-recording', method: 'DELETE', url: ':id/recording' },
      { name: 'Delete Voicemail', id: 'remove-voicemail', method: 'DELETE', url: ':id/voicemail' },
      { name: 'Create Insight Card', id: 'insight-cards', method: 'POST', url: ':id/insight_cards' }
    ]
  },
  {
    id:'campaigns',
    title: 'Dialer Campaigns',
    type: 'api',
    logo: CallLogo,
    submenu: [
      { name: 'Retrieve Campaign', id: 'find', method: 'GET', url: ':id/dialer_campaign' },
      { name: 'Create Campaign', id: 'create', method: 'POST', url: ':id/dialer_campaign' },
      { name: 'Delete Campaign', id: 'remove', method: 'DELETE', url: ':id/dialer_campaign' },
      { name: 'Retrieve Campaign Number', id: 'get-number', method: 'GET', url: ':id/dialer_campaign/phone_numbers' },
      { name: 'Add Campaign Number', id: 'add-number', method: 'POST', url: ':id/dialer_campaign/phone_numbers' },
      { name: 'Delete Campaign Number', id: 'remove-number', method: 'DELETE', url: ':id/dialer_campaign/phone_numbers/:dailer_id' }
    ]
  },
  {
    id:'numbers',
    title: 'Numbers',
    type: 'api',
    logo: NumberLogo,
    submenu: [
      { name: 'All Numbers', id: 'all', method: 'GET', url: '' },
      { name: 'Retrieve Number', id: 'find', method: 'GET', url: ':id' },
      { name: 'Update Number', id: 'update', method: 'PUT', url: ':id' },
      { name: 'Update Number Music', id: 'update-music', method: 'PUT', url: ':id' },
    ]
  },
  {
    id:'contacts',
    title: 'Contacts',
    type: 'api',
    logo: UserLogo,
    submenu: [
      { name: 'All Contacts', id: 'all', method: 'GET', url: '' },
      { name: 'Search Contacts', id: 'search', method: 'GET', url: 'search' },
      { name: 'Retrieve Contact', id: 'find', method: 'GET', url: ':id' },
      { name: 'Create Contact', id: 'create', method: 'POST', url: '' },
      { name: 'Update Contanct', id: 'update', method: 'POST', url: ':id' },
      { name: 'Delete Contact', id: 'remove', method: 'DELETE', url: ':id' },
      { name: 'Add Contact Phone', id: 'add-phone', method: 'POST', url: ':id/phone_details' },
      { name: 'Update Contact Phone', id: 'update-phone', method: 'PUT', url: ':id/phone_details/:phone_id' },
      { name: 'Delete Contact Phone', id: 'remove-phone', method: 'DELETE', url: ':id/phone_details/:id' },
      { name: 'Add Contact Email', id: 'add-email', method: 'POST', url: ':id/email_details' },
      { name: 'Update Contact Email', id: 'update-email', method: 'PUT', url: ':id/email_details/:email_id' },
      { name: 'Delete Contact Email', id: 'remove-email', method: 'DELETE', url: ':id/email_details/:email_id' },
    ]
  },
  {
    id:'tags',
    title: 'Tags',
    type: 'api',
    logo: TagLogo,
    submenu: [
      { name: 'All Tags', id: 'all', method: 'GET', url: '' },
      { name: 'Retrieve Tag', id: 'find', method: 'GET', url: ':id' },
      { name: 'Create Tag', id: 'create', method: 'POST', url: '' },
      { name: 'Update Tag', id: 'update', method: 'PUT', url: ':id' },
      { name: 'Delete Tag', id: 'remove', method: 'DELETE', url: ':id' },
    ]
  },
  {
    id:'webhooks',
    title: 'Webhooks',
    type: 'api',
    logo: IntegrationLogo,
    submenu: [
      { name: 'All Webhooks', id: 'all', method: 'GET', url: '' },
      { name: 'Retrieve Webhook', id: 'find', method: 'GET', url: ':id' },
      { name: 'Create Webhook', id: 'create', method: 'POST', url: '' },
      { name: 'Update Webhook', id: 'update', method: 'PUT', url: ':id' },
      { name: 'Delete Webhook', id: 'remove', method: 'DELETE', url: ':id' },
    ]
  },
  {
    id:'integrations',
    title: 'Integrations',
    type: 'api',
    logo: IntegrationLogo,
    submenu: [
      { name: 'Retrieve Integration', id: 'find', method: 'GET', url: 'me' },
      { name: 'Enable Integration', id: 'enable', method: 'POST', url: 'enable' },
      { name: 'Disable Integration', id: 'disable', method: 'POST', url: 'disable' },
    ]
  },
  {
    id:'user',
    title: 'User',
    type: 'webhook',
    logo: UserLogo,
    submenu: [
      { name: 'User Connected', id: 'user.connected', method:'PATCH', url: './data.user'},
      { name: 'User Disconnected', id: 'user.disconnected', method:'PATCH', url: './data.user'},
      { name: 'User Closed', id: 'user.closed', method:'PATCH', url: './data.user'},
      { name: 'User Opened', id: 'user.opened', method:'PATCH', url: './data.user'},
      { name: 'User Wrap Up Time Start', id: 'user.wut_start', method:'PATCH', url: './data.user'},
      { name: 'User Wrap Up Time End', id: 'user.wut_end', method:'PATCH', url: './data.user'},
      { name: 'User Created', id: 'user.created', method:'PATCH', url: './data.user'},
      { name: 'User Deleted', id: 'user.deleted', method:'PATCH', url: './data.user'},
    ]
  },
  {
    id:'call',
    title: 'Call',
    type: 'webhook',
    logo: CallLogo,
    submenu: [
      { name: 'Call Created', id: 'call.created', method:'PATCH', url: './data.call'},
      { name: 'Call Ringing', id: 'call.ringing_on_agent', method:'PATCH', url: './data.call'},
      { name: 'Call Answered', id: 'call.answered', method:'PATCH', url: './data.call'},
      { name: 'Call Hold', id: 'call.hold', method:'PATCH', url: './data.call'},
      { name: 'Call Unhold', id: 'call.unhold', method:'PATCH', url: './data.call'},
      { name: 'Call Unsuccessful Transfer', id: 'call.unsuccessful_transfer', method:'PATCH', url: './data.call'},
      { name: 'Call Hung Up', id: 'call.hungup', method:'PATCH', url: './data.call'},
      { name: 'Call Tagged', id: 'call.tagged', method:'PATCH', url: './data.call'},
      { name: 'Call Ended', id: 'call.ended', method:'PATCH', url: './data.call'},
      { name: 'Call Commented', id: 'call.commented', method:'PATCH', url: './data.call'},
      { name: 'Call Voicemail Left', id: 'call.voicemail_left', method:'GPATCH', url: './data.call'},
      { name: 'Call Archived', id: 'call.archived', method:'PATCH', url: './data.call'},
      { name: 'Call Unarchived', id: 'call.unarchived', method:'PATCH', url: './data.call'},
    ]
  },
  {
    id:'number',
    title: 'Number',
    type: 'webhook',
    logo: NumberLogo,
    submenu: [
      { name: 'Number Created', id: 'number.created', method:'PATCH', url: './data.number'},
      { name: 'Number Closed', id: 'number.closed', method:'PATCH', url: './data.number'},
      { name: 'Number Opened', id: 'number.opened', method:'PATCH', url: './data.number'},
      { name: 'Number Deleted', id: 'number.deleted', method:'PATCH', url: './data.number'},
    ]
  },
  {
    id:'contact',
    title: 'Contact',
    type: 'webhook',
    logo: UserLogo,
    submenu: [
      { name: 'Contact Created', id: 'contact.created', method:'PATCH', url: './data.contact'},
      { name: 'Contact Updated', id: 'contact.updated', method:'PATCH', url: './data.contact'},
      { name: 'Contact Deleted', id: 'contact.deleted', method:'PATCH', url: './data.contact'},
    ]
  }
];