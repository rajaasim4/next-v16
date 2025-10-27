const UserDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const awaitedParams = await params;
  console.log(awaitedParams);
  return <div>UserDetails of {awaitedParams.id}</div>;
};

export default UserDetails;
