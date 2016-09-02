describe('todoFactory', function() {
	beforeEach(function() {
		bard.appModule('app');
		bard.inject('todoFactory' , 'apiUrl', '$httpBackend');
	});

	describe('when getAll is called', function() {
		it('should return data on success', function() {
			$httpBackend.whenGET(apiUrl + '/todos').respond({
				data: [{}]
			});

			todoFactory.getAll().then(
				function(data) {
					expect(data.length).toEqual(1);
				},
				function(error) {
					expect(1).toEqual(2);
				}
			);
		});
		it('should return error on fail', function() {
			$httpBackend.whenGET(apiUrl + '/todos').respond(500);

			todoFactory.getAll().then(
				function(data) {
					expect(1).toBe(2);
				},
				function(error) {
					expect(error).toBeDefined();
				}
			);
		});
	});
	describe('when getById is called', function() {
		it('should return data and the id on success', function() {
			var id = 1;

			$httpBackend.whenGET(apiUrl + '/todos/' + id).respond({
				data:[{}]
			});
			todoFactory.getById(id).then(
				function(data) {
					expect(data.length).toEqual(1);
				},
				function(error) {
					expect(1).toEqual(2);
				}
			 );
		 }); 
			it('should return error on fail', function() {
				var id = 1;
				$httpBackend.whenGET(apiUrl + '/todos/' + id).respond(500);

				todoFactory.getById().then(
					function(data) {
						expect(1).toBe(2);
					},
					function(error) {
						expect(error).tobeDefined();
					}

				);
			});

		});
		describe('when update is called', function() {
			it('should return the update successfully', function() {
				var todo = "mow the lawn";

				$httpBackend.whenGET(apiUrl + '/todos/' + todo.todoId, todo).respond({
					data:[{}]
				});
				todoFactory.update(todo)
				.then(
					function(data) {
						expect(data.length).toBe(1);
					},
					function (error) {
						expect(1).toEqual(2);
					}
				);
			});
			it('should return error on fail', function () {
				var todo = "mow the lawn";
				$httpBackend.whenGET(apiUrl + '/todos/' + todo.todoId, todo).respond(500);
				
				todoFactory.update(todo)
				.then(
					function(data) {
						expect(1).toBe(2);
					},
					function(error) {
						expect(error).toBeDefined();
					}
				);
			});
		});
		describe('When remove is called', function() {
			it('should return successfully', function() {
				var todo = "mow the lawn";

				$httpBackend.whenGET(apiUrl + '/todos/' + todo.todoId).respond({
					data:[{}]
				});
				todoFactory.remove(todo)
				.then(
					function(data) {
						expect(data.length).toBe(1);
					},
					function (error) {
						expect(1).toEqual(2);
					}
				);
			});
			it('should return error on fail', function () {
				var todo = "mow the lawn";
				
				$httpBackend.whenGET(apiUrl + '/todos/' + todo.todoId).respond(500);
				
				todoFactory.remove(todo)
				.then(
					function(data) {
						expect(1).toBe(2);
					},
					function(error) {
						expect(error).toBeDefined();
					}
				);
			});
		});
		describe('When add is called', function() {
			it('should return successfully', function() {
				var todo = "mow the lawn";

				$httpBackend.whenGET(apiUrl + '/todos/' + todo.todoId).respond({
					data:[{}]
				});
				todoFactory.add(todo)
				.then(
					function(data) {
						expect(data.length).toBe(1);
					},
					function (error) {
						expect(1).toEqual(2);
					}
				);
			});
			it('should return error on fail', function () {
				var todo = "mow the lawn";
				
				$httpBackend.whenGET(apiUrl + '/todos/' + todo.todoId).respond(500);
				
				todoFactory.add(todo)
				.then(
					function(data) {
						expect(1).toBe(2);
					},
					function(error) {
						expect(error).toBeDefined();
					}
				);
			});
		});

});