export const selectEntities = entity => state => {
  const entities = state.getIn(['entities', entity]);

  return entities ? entities.toJS() : {};
}
