export const json_array = await generate_array('http://ec2-18-236-74-56.us-west-2.compute.amazonaws.com:3000/intern'); 

export async function generate_array(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json[0].locations.flatMap(location => 
        location.departments.flatMap(department => 
            department.interns.map(intern => ({
                name: intern.name,
                department: department.departmentName,
                location: location.locationName
            }))
        )
    );
}