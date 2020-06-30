# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, unique: true|
|name|string|null:false|
|password|string|null:false|
|email|string|null:false, unique: true|

### Association
- has_many :messages
- has_many :users_groups
- has_many :groups, through: :users_groups

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, unique: true|
|name|string|null: false|

### Association
- has_many :messages
- has_many :users_groups
- has_many :users, through: :users_groups

## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, unique: true|
|user_id|integer|null:false, foreign_key: true|
|group_id|integer|null:false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user 


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|group_id|integer|foreign_key: true, null: false|
|user_id|integer|foreign_key: true, null: false|

### Association
- belongs_to :group
- belongs_to :user 

