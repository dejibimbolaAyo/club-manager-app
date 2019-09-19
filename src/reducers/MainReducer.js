import memberReducer, {initialMemberState} from './MemberReducer';
import authReducer, {initialAuthState} from './AuthReducer';

export const mainReducer = ({ member, auth }, action) => ({
  member: memberReducer(member, action),
  auth: authReducer(auth, action)
});

export const initialMainState = {
  member: initialMemberState,
  auth: initialAuthState
}