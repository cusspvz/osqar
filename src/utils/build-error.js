export default ( attrs ) => {
  if ( ! attrs.message ) {
    throw new Error( "You need a message attribute!" )
  }

  const err = new Error( attrs.message )

  for ( let attr in attrs ) {
    err[attr] = attrs[attr]
  }

  return err
}
