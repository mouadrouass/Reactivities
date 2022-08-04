import { Grid, List } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface Props {
    activities: Activity[];  
    selectedActivity: Activity | undefined;  
    handleSelectActivity: (id: string) => void;  
    cancelSelectActivity: () => void;  
    editMode: boolean;  
    openForm: (id: string) => void;  
    closeForm: () => void;  
    createOrEdit: (activity: Activity) => void;  
    deleteActivity: (id: string) => void;  
}
export default function ActivityDashboard({activities, selectedActivity, 
  handleSelectActivity, cancelSelectActivity, 
  editMode, openForm, closeForm, createOrEdit, deleteActivity}: Props){
return (
    <Grid>
        <Grid.Column width='10'>
          <ActivityList activities={activities} handleSelectActivity={handleSelectActivity} deleteActivity = {deleteActivity} />
        </Grid.Column>
        <Grid.Column width='6'>
            {selectedActivity && !editMode &&
          <ActivityDetails activity={selectedActivity} cancelSelectActivity={cancelSelectActivity}
          openForm={() => openForm(selectedActivity.id)} />}
          {editMode &&
          <ActivityForm closeForm={closeForm} activity={selectedActivity} createOrEdit={createOrEdit} />}
          </Grid.Column>
    </Grid>
)
}