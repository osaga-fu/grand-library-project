import axios from "axios";

export class MemberService {
  async searchMembers(query) {
    const response = await axios.get(
      `http://localhost:8080/members?query=${query}`
    );
    return response.data;
  }
}
