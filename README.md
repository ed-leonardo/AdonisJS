<h1 align="center">Welcome to adonisjs 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-4.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: UNLICENSED" src="https://img.shields.io/badge/License-UNLICENSED-yellow.svg" />
  </a>
</p>

> Adonisjs boilerplate for API server with pre-configured JWT

<p>API rest in AdonisJS with email dispatch.</p>
<p>Test can be realized on Insomnia or other apllication like Postman, based on the following structure: </p>

## User:

	|--- POST: {{ base_url  }}/users - Route to create a user 
	{
		"username": ,
		"email": ,
		"password": ,
		"password_confirmation": ,
		"address":[
		{
			"street": ,
			"number": ,
			"district": ,
			"city": ,
			"state": 		
		}
			]
	}

## Session:

	|--- POST: {{ base_url  }}/sessions - Route to login.
	{
		"username": ,
		"email": 
	}

## ForgotPassword:

	|--- POST: {{ base_url  }}/passwords - Route to request password reset.
	{
		"email": ,
		"redirect_url": 
	}

	|--- PUT: {{ base_url  }}/passwords - Route to update password.
	{
		"token": ,
		"password": ,
		"password_confirmation": 
	}

## Files: *Using Authentication Middleware
    |--- POST: {{ base_url  }}/files - Route to post a file
	Multipart:
    file:

	|--- GET: {{ base_url  }}/files/:id - Route to show a file
	NO BODY

## Project: *Using Authentication Middleware 

	|--- POST: {{ base_url  }}/projects - Route to create a project
	{
		"title": ,
		"description": 
	}

	|--- PUT: {{ base_url  }}/projects/:id - Route to update a project
	{
		"title": ,
		"description": 
	}

	|--- DELETE: {{ base_url  }}/projects/:id - Route to delete a project
	NO BODY

	|--- GET: {{ base_url  }}/projects/:id - Route to show a project
	NO BODY

	|--- GET: {{ base_url  }}/projects?page=:id - Route to show all projects, with pagination
	NO BODY

## Task: *Using Authentication Middleware 

	|--- POST: {{ base_url  }}/projects/:id/tasks - Route to create a project task
	{
		"title": ,
		"user_id": ,
		"description": ,
		"file_id": ,
		"due_date": "YYYY-MM-DD HH:MM:SS"
	}

	|--- PUT: {{ base_url  }}/projects/:id/tasks/:id  - Route to update a project task
	{
		"title": ,
		"user_id": ,
		"description": ,
		"file_id": ,
		"due_date": "YYYY-MM-DD HH:MM:SS"
	}

	|--- DELETE: {{ base_url  }}/projects/:id/tasks/:id - Route to delete a project task
	NO BODY

	|--- GET: {{ base_url  }}/projects/:id/tasks/:id - Route to show a project task
	NO BODY

	|--- GET: {{ base_url  }}/projects/:id/tasks - Route to show all tasks of the project
	NO BODY

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
