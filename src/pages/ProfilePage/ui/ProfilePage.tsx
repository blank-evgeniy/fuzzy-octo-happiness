import { classNames } from "shared/lib/classNames/classNames";
import styles from "./ProfilePage.module.scss";
import DynamicModuleLoader, {
  ReducersList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import { profileReducer } from "entities/Profile";

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(styles.ProfilePage, {}, [className])}>1</div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
