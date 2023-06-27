export function reducer(state, { type, payload }) {
  switch (type) {
    case 'tabs_id':
      return {
        ...state,
        tabs_id: payload
      };
    default:
      throw new Error('Action non reconnue');
  }
}
