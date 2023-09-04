import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm";

const EditEventPage = () => {
  const { event } = useRouteLoaderData('edit-event');
  return <EventForm event={event} />;
};

export default EditEventPage;
