CREATE TABLE if not exists users(Name varchar(32) not null, UserId varchar(15) not null, Password varchar(20) not null, PrevOrders varchar(25)); 

CREATE TABLE if not exists sandwich
(
	sandID integer not null, 
	Name varchar(25) not null, 
	Time integer not null, 
	Price float not null, 
	#Ingredients varchar array[10] not null,
	Bread varchar array[10] not null
);

CREATE TABLE if not exists pizza_calzone
(
	pizzaID integer not null, 
	Name varchar(25) not null, 
	Time integer not null, 
	Price float not null, 
	#Ingredients varchar array[10] not null
);

CREATE TABLE if not exists active_orders
(
	UserName varchar(32) not null, 
	Item varchar array[5] not null, 
	PickupTime integer not null
);

CREATE TABLE if not exists inventory
(
	ingredientId varchar(25) not null, 
	stockId BIT not null, 
	primary key(ingredientId)
);

CREATE TABLE if not exists ingredients
(
	foodID integer not null, 
	ingredient varchar(20) not null
);

INSERT into sandwich values 
(1, 'Baker Bacon', 7, 6.89, 
	#['bacon', 'pepperjack', 'lettuce', 'tomato', 'balsamic vinaigrette'], 
	#['white', 'wheat', 'ciabatta', 'potato rose', 'wholegrain']), 
(2, 'BBQ Chicken', 7, 6.89, 
	#['chicken', 'bacon', 'mozzarella', 'bbq sauce', 'lettuce', 'tomato', 'onion'], 
	#['white', 'wheat', 'ciabatta', 'potato rose', 'wholegrain']), 
(3, 'BLT', 7, 4.89, 
	#['bacon', 'lettuce', 'tomato'], 
	#['white', 'wheat', 'ciabatta', 'potato rose', 'whole grain']), 
(4, 'Italian', 7, 6.89, 
	#['pepperoni', 'salami', 'ham', 'provolone', 'lettuce', 'tomato', 'onion', 'italian dressing', 'salt and pepper'], 
	#['white', 'wheat', 'ciabatta', 'potato rose', 'wholegrain']), 
(5, 'Darley Divine', 7, 6.89, 
	#['chicken', 'marinara', 'mozzarella', 'parmesan','spinach','tomato'], 
	#['white', 'wheat', 'ciabatta', 'potato rose', 'whole grain']), 
(6, 'Farrand Fodder', 7, 6.89, 
	#['basil pesto', 'mozzarella', 'spinach', 'cucumber', 'tomato', 'hummus'], 
	['white', 'wheat', 'ciabatta', 'potato rose', 'wholegrain']), 
(7, 'Hallet Ham', 7, 6.89, 
	#['ham', 'cheddar', 'lettuce', 'tomato'], 
	['white', 'wheat', 'ciabatta', 'potato rose', 'whole grain']), 
(8, 'Libby Licous', 7, 6.89,
	#['fontina', 'mozzarella', 'parmesan'], 
	['white', 'wheat', 'ciabatta', 'potato rose', 'whole grain']), 
(9, 'Parmesan Grilled Cheese', 7, 5.89, 
	#['fontina', 'balsamic onions', 'tomato'], 
	['white', 'wheat', 'ciabatta', 'potato rose', 'whole grain']), 
(10, 'Tofu Mozzarella', 7, 5.89, 
	#['tofu', 'mozzarella', 'lettuce', 'tomato', 'balsamic onions'], 
	['white', 'wheat', 'ciabatta', 'potato rose', 'whole grain']), 
(11, 'Tuna Melt', 7, 5.89, 
	#['tuna salad', 'swiss', 'lettuce', 'tomato', 'onion'], 
	['white', 'wheat', 'ciabatta', 'potato rose', 'whole grain']), 
(12, 'Turkey Bacon Club', 7, 6.89, 
	#['turkey', 'bacon', 'provolone', 'lettuce', 'tomato', 'onion'],
	['white', 'wheat', 'ciabatta', 'potato rose', 'whole grain']), 
(13, 'Turkey Jalapeno Melt', 7, 6.89, 
	#['turkey', 'pepper jack', 'jalapeno', 'lettuce', 'tomato', 'onion'], 
	['white', 'wheat', 'ciabatta', 'potato rose', 'whole grain']), 
(14, 'Veggie Club', 7,  6.89, 
	#['spinach', 'bell peppers', 'mushrooms', 'cucumbers', 'lettuce', 'tomato','balsamic onions'], 
	['white', 'wheat', 'ciabatta', 'potato rose', 'wholegrain']);

INSERT INTO ingredients values
(1, 'Bacon'),
(1, 'Pepper Jack'),
(1, 'Lettuce'),
(1, 'Tomato'),
(1, 'Balasmic Vinaigrette'),
(1, 'Bread'),

(2, 'Chicken'),
(2, 'Bacon'),
(2, 'Mozzarella'),
(2, 'BBQ Sauce'),
(2, 'Lettuce'),
(2, 'Tomato'),
(2, 'Onion'),
(2, 'Bread'),

(3, 'Bacon'),
(3, 'Lettuce'),
(3, 'Tomato'),
(3, 'Bread'),

(4, 'Pepperoni'),
(4, 'Salami'),
(4, 'Ham'),
(4, 'Provolone'),
(4, 'Lettuce'),
(4, 'Tomato'),
(4, 'Onion'),
(4, 'Italian Dressing'),
(4, 'Salt and Pepper'),
(4, 'Bread'),

(5, 'Chicken'),
(5, 'Marinara'),
(5, 'Mozzarella'),
(5, 'Parmesan'),
(5, 'Spinach'),
(5, 'Tomato'),
(5, 'Bread'),

['basil pesto', 'mozzarella', 'spinach', 'cucumber', 'tomato', 'hummus']
(6, 'Basil Pesto'),
(6, 'Mozzarella'),


 
INSERT into pizza_calzone values ('Cheese Pizza', 20, 4.89, ['Mozzarella', 'Red Sauce']),('Pepperoni Pizza', 20,5.49,['Mozzarella','Red Sauce','Pepperoni']),('BBQ Chicken Pizza',20,6.89,['Mozzarella','BBQ Sauce','Chicken','Bacon','Onion']),('Meat Lovers Pizza',20,6.98,['Mozzarella','Sausage','Ham','Pepperoni','Red Sauce']),('Hawaiian Pizza',20,6.89,['Mozzarella','Pineapple','Ham','Red Sauce']),('Margherita Pizza',20,5.49,['Mozzarella','Tomato','Basil','Garlic','Red Sauce']),('Vegetarian Pizza',20,5.49,['Mozzarella','Spinach','Bell Peppers','Mushrooms','Red Sauce']),('Vegan Pizza',20,5.39,['Tomato','Garlic','Black Olives','Basil','Red Sauce']),('Cheese Calzone', 20, 5.89, ['Mozzarella']),('Pepperoni Calzone', 20,6.49,['Mozzarella','Pepperoni']),('BBQ Chicken Calzone',20,7.89,['Mozzarella','BBQ Sauce Side','Chicken','Bacon','Onion']),('Meat Lovers Calzone',20,7.98,['Mozzarella','Sausage','Ham','Pepperoni']),('Hawaiian Calzone',20,7.89,['Mozzarella','Pineapple','Ham']),('Margherita Calzone',20,6.49,['Mozzarella','Tomato','Basil','Garlic']),('Vegetarian Calzone',20,6.49,['Mozzarella','Spinach','Bell Peppers','Mushrooms']),('Vegan Calzone',20,6.39,['Tomato','Garlic','Black Olives','Basil']);

INSERT into inventory values ('White Bread', 1), ('Wheat Bread', 1), ('Ciabatta', 1), ('Potato Rosemary', 1), ('Whole Grain', 1), ('Bacon', 1), ('Chicken', 1), ('Ham', 1), ('Salami', 1), ('Pepperoni', 1), ('Sausage', 1),('Turkey',1), ('Cheddar', 1), ('Mozzarella', 1), ('Provolone', 1), ('Pepper Jack', 1), ('Fontina', 1), ('Swiss', 1), ('Parmesan', 1),  ('Lettuce', 1), ('Tomato', 1), ('Spinach', 1), ('Onion',1),('Mushrooms',1),('Bell Peppers',1), ('Banana Peppers',1), ('Cucumbers',1), ('Balsamic Onions', 1),('Black Olives',1),('Jalapenos',1),('Pineapple', 1), ('BBQ Sauce', 1), ('Red Sauce', 1), ('Hummus', 1), ('Garlic', 1), ('Basil', 1);