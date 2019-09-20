import adminReducer, {initialAdminState} from './AdminReducer';
import memberReducer, {initialMemberState} from './MemberReducer';
import authReducer, {initialAuthState} from './AuthReducer';

export const mainReducer = ({ admin, member, auth }, action) => ({
  admin: adminReducer(admin, action),
  member: memberReducer(member, action),
  auth: authReducer(auth, action)
});

export const initialMainState = {
  admin: initialAdminState,
  member: initialMemberState,
  auth: initialAuthState
}