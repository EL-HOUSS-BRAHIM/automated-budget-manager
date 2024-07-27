import os

project_structure = {
    "backend-v2": [
        "app/__init__.py",
        "app/config.py",
        "app/models.py",
        "app/routes/__init__.py",
        "app/routes/auth_routes.py",
        "app/routes/expense_routes.py",
        "app/routes/budget_routes.py",
        "app/routes/goal_routes.py",
        "app/routes/report_routes.py",
        "app/routes/profile_routes.py",
        "app/routes/settings_routes.py",
        "app/services/__init__.py",
        "app/services/auth_service.py",
        "app/services/expense_service.py",
        "app/services/budget_service.py",
        "app/services/goal_service.py",
        "app/services/report_service.py",
        "app/services/profile_service.py",
        "app/services/settings_service.py",
        "app/utils/__init__.py",
        "app/utils/auth_utils.py",
        "app/utils/validation_utils.py",
        "app/utils/financial_utils.py",
        "app/utils/response_utils.py",
        "app/templates/email/reset_password.html",
        "app/templates/email/verify_email.html",
        "tests/__init__.py",
        "tests/test_auth.py",
        "tests/test_expense.py",
        "tests/test_budget.py",
        "tests/test_goal.py",
        "tests/test_report.py",
        "tests/test_profile.py",
        "tests/test_settings.py",
        ".env",
        "requirements.txt",
        "run.py",
        "README.md",
    ],
    "backend/migrations/versions": []
}

def create_project_structure(base_path, structure):
    for root, files in structure.items():
        for file in files:
            file_path = os.path.join(base_path, root, file)
            os.makedirs(os.path.dirname(file_path), exist_ok=True)
            with open(file_path, 'w') as f:
                pass
        if not files:  # create empty directories
            os.makedirs(os.path.join(base_path, root), exist_ok=True)

if __name__ == "__main__":
    base_path = os.getcwd()  # or specify another path if needed
    create_project_structure(base_path, project_structure)
    print("Project structure created successfully!")
