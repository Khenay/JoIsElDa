import React from "react";

const Logout = () => {

    return(
        <div>
            <script>        
        localStorage.clear();
        window.location.reload();
        </script>

        </div>
    )


}
export default Logout;