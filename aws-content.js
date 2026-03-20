// AWS Solutions Architect Professional - Comprehensive Study Content
// Based on Official AWS Exam Guide and Documentation

const awsTopics = [
    // Domain 1: Design for Organizational Complexity (26%)
    {
        domain: 'organizational',
        title: 'AWS Organizations',
        summary: 'Central management service for multiple AWS accounts with consolidated billing and governance.',
        content: `
            <h4>Overview</h4>
            <p>AWS Organizations is an account management service that enables you to consolidate multiple AWS accounts into an organization that you create and centrally manage.</p>

            <h4>Key Components</h4>
            <ul>
                <li><strong>Organization:</strong> A collection of AWS accounts that you can organize into a hierarchy and manage centrally</li>
                <li><strong>Root:</strong> The parent container for all accounts in your organization</li>
                <li><strong>Organizational Units (OUs):</strong> Containers for accounts within a root, allowing hierarchical grouping</li>
                <li><strong>Accounts:</strong> Standard AWS accounts that contain your AWS resources</li>
                <li><strong>Service Control Policies (SCPs):</strong> Policies that specify maximum permissions for member accounts</li>
            </ul>

            <h4>Consolidated Billing</h4>
            <ul>
                <li>Single payment method for all accounts</li>
                <li>Combined usage across all accounts for volume pricing discounts</li>
                <li>Shared Reserved Instances and Savings Plans across accounts</li>
                <li>Free tier applies across all accounts in organization</li>
            </ul>

            <h4>Service Control Policies (SCPs)</h4>
            <ul>
                <li>Define guardrails that apply to all IAM users and roles in attached accounts</li>
                <li>Do NOT grant permissions - they only limit permissions</li>
                <li>Do NOT affect service-linked roles or the management account</li>
                <li>Use allow lists or deny lists strategies</li>
                <li>Can prevent accounts from leaving the organization</li>
            </ul>

            <h4>Best Practices</h4>
            <ul>
                <li>Use management account only for billing and organization management</li>
                <li>Create dedicated accounts for logging, security, and shared services</li>
                <li>Apply SCPs at OU level rather than individual accounts</li>
                <li>Use tag policies for consistent tagging across organization</li>
                <li>Enable AWS CloudTrail organization trails for compliance</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html',
            'https://aws.amazon.com/organizations/'
        ]
    },
    {
        domain: 'organizational',
        title: 'Multi-Account Strategy',
        summary: 'Design patterns for organizing AWS accounts to achieve security, compliance, and operational efficiency.',
        content: `
            <h4>Why Multi-Account?</h4>
            <ul>
                <li><strong>Security isolation:</strong> Separate security domains and blast radius containment</li>
                <li><strong>Billing separation:</strong> Cost allocation per business unit or project</li>
                <li><strong>Regulatory compliance:</strong> Isolate regulated workloads</li>
                <li><strong>Resource limits:</strong> Avoid service quotas and soft limits</li>
            </ul>

            <h4>Common Account Structures</h4>
            <ul>
                <li><strong>Management Account:</strong> Root account for AWS Organizations, billing only</li>
                <li><strong>Log Archive Account:</strong> Centralized logging (CloudTrail, Config, VPC Flow Logs)</li>
                <li><strong>Security Tooling Account:</strong> Security services (GuardDuty master, Security Hub)</li>
                <li><strong>Network Account:</strong> Transit Gateway, Direct Connect, Route 53 Resolver</li>
                <li><strong>Shared Services Account:</strong> Common services like Active Directory</li>
                <li><strong>Workload Accounts:</strong> Dev, Test, Prod environments</li>
            </ul>

            <h4>AWS Control Tower</h4>
            <p>Automates multi-account setup based on AWS best practices:</p>
            <ul>
                <li>Landing Zone: Well-architected multi-account baseline</li>
                <li>Guardrails: Pre-configured SCPs and AWS Config rules</li>
                <li>Account Factory: Automated account provisioning</li>
                <li>Dashboard: Centralized visibility and compliance</li>
            </ul>

            <h4>Cross-Account Access Patterns</h4>
            <ul>
                <li><strong>IAM Roles:</strong> AssumeRole for temporary credentials (preferred)</li>
                <li><strong>Resource-based policies:</strong> Direct resource access (S3, SNS, SQS)</li>
                <li><strong>AWS PrivateLink:</strong> Private connectivity between VPCs</li>
                <li><strong>VPC Peering:</strong> Network-level access between accounts</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/',
            'https://aws.amazon.com/controltower/'
        ]
    },
    {
        domain: 'organizational',
        title: 'Identity Federation and SSO',
        summary: 'Implementing enterprise identity management with AWS SSO and federation strategies.',
        content: `
            <h4>AWS IAM Identity Center (AWS SSO)</h4>
            <p>Centralized access management for multiple AWS accounts and cloud applications:</p>
            <ul>
                <li>Single sign-on to all AWS accounts in AWS Organizations</li>
                <li>Integration with external identity providers (IdPs)</li>
                <li>Permission sets define access levels across accounts</li>
                <li>Supports SAML 2.0 for enterprise identity systems</li>
            </ul>

            <h4>Federation Methods</h4>
            <ul>
                <li><strong>SAML 2.0 Federation:</strong> Enterprise IdPs (Active Directory, Okta, Azure AD)</li>
                <li><strong>Web Identity Federation:</strong> Social login (Amazon, Google, Facebook)</li>
                <li><strong>OpenID Connect (OIDC):</strong> Modern identity protocol</li>
                <li><strong>Custom Identity Broker:</strong> Legacy systems or custom requirements</li>
            </ul>

            <h4>AWS Directory Service Options</h4>
            <ul>
                <li><strong>AWS Managed Microsoft AD:</strong> Actual AD domain controllers managed by AWS</li>
                <li><strong>AD Connector:</strong> Proxy to on-premises AD, no data sync</li>
                <li><strong>Simple AD:</strong> Standalone directory powered by Samba 4</li>
            </ul>

            <h4>Best Practices</h4>
            <ul>
                <li>Use AWS SSO as primary access method for multi-account environments</li>
                <li>Integrate with corporate IdP rather than managing users in AWS</li>
                <li>Implement MFA for all human access</li>
                <li>Use short-lived credentials (12 hours or less)</li>
                <li>Audit access using CloudTrail and IAM Access Analyzer</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/singlesignon/',
            'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers.html'
        ]
    },
    {
        domain: 'organizational',
        title: 'AWS Control Tower',
        summary: 'Automated multi-account AWS environment setup and governance using AWS best practices.',
        content: `
            <h4>Overview</h4>
            <p>AWS Control Tower provides the easiest way to set up and govern a secure, multi-account AWS environment based on AWS best practices.</p>

            <h4>Key Components</h4>
            <ul>
                <li><strong>Landing Zone:</strong> Well-architected multi-account baseline environment</li>
                <li><strong>Guardrails:</strong> High-level rules for governance (preventive and detective)</li>
                <li><strong>Account Factory:</strong> Automates provisioning of new accounts</li>
                <li><strong>Dashboard:</strong> Single pane of glass for compliance and governance</li>
            </ul>

            <h4>Guardrails Types</h4>
            <ul>
                <li><strong>Preventive:</strong> Implemented using SCPs, prevent policy violations</li>
                <li><strong>Detective:</strong> Implemented using AWS Config, detect non-compliance</li>
                <li><strong>Mandatory:</strong> Always enforced by Control Tower</li>
                <li><strong>Strongly Recommended:</strong> Based on AWS best practices</li>
                <li><strong>Elective:</strong> Optional based on your requirements</li>
            </ul>

            <h4>Landing Zone Structure</h4>
            <ul>
                <li><strong>Root OU:</strong> Contains all accounts</li>
                <li><strong>Security OU:</strong> Log Archive and Audit accounts</li>
                <li><strong>Sandbox OU:</strong> Test and development accounts</li>
                <li><strong>Custom OUs:</strong> For your workload accounts</li>
            </ul>

            <h4>Account Factory</h4>
            <ul>
                <li>Self-service account creation with standardized baseline</li>
                <li>Integrates with AWS Service Catalog</li>
                <li>Automatically applies guardrails</li>
                <li>Pre-configured VPC and subnets</li>
                <li>IAM Identity Center (SSO) enabled</li>
            </ul>

            <h4>When to Use Control Tower</h4>
            <ul>
                <li>Starting fresh with multi-account setup</li>
                <li>Need automated governance and compliance</li>
                <li>Want to follow AWS best practices out-of-the-box</li>
                <li>Self-service account creation required</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/controltower/',
            'https://aws.amazon.com/controltower/'
        ]
    },
    {
        domain: 'organizational',
        title: 'AWS Resource Access Manager (RAM)',
        summary: 'Securely share AWS resources across accounts and within your organization.',
        content: `
            <h4>Overview</h4>
            <p>AWS RAM enables you to share AWS resources with other AWS accounts or within your AWS Organization without needing to create duplicate resources.</p>

            <h4>Shareable Resources</h4>
            <ul>
                <li><strong>Networking:</strong> VPC subnets, Transit Gateway, Route 53 Resolver rules</li>
                <li><strong>Compute:</strong> License Manager configurations, EC2 Capacity Reservations</li>
                <li><strong>Database:</strong> Aurora DB clusters</li>
                <li><strong>Other:</strong> CodeBuild projects, Image Builder components, Resource Groups</li>
            </ul>

            <h4>Key Benefits</h4>
            <ul>
                <li>Reduce operational overhead - no resource duplication</li>
                <li>Improved security - centralized management</li>
                <li>Cost savings - share expensive resources</li>
                <li>Simplified networking - shared VPCs and Transit Gateways</li>
            </ul>

            <h4>Sharing Models</h4>
            <ul>
                <li><strong>Within Organization:</strong> Share with OUs or entire organization</li>
                <li><strong>External Accounts:</strong> Share with specific AWS account IDs</li>
                <li><strong>Cross-Region:</strong> Some resources support cross-region sharing</li>
            </ul>

            <h4>VPC Sharing Use Case</h4>
            <ul>
                <li>Owner account manages VPC, subnets, route tables</li>
                <li>Participant accounts launch resources into shared subnets</li>
                <li>Security groups remain account-specific</li>
                <li>Simplifies networking in multi-account environments</li>
            </ul>

            <h4>Best Practices</h4>
            <ul>
                <li>Use RAM for centralized networking (shared VPC pattern)</li>
                <li>Share Transit Gateway attachments for hub-and-spoke networks</li>
                <li>Leverage for compliance (centralized Route 53 Resolver rules)</li>
                <li>Monitor with CloudTrail for resource access auditing</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/ram/',
            'https://aws.amazon.com/ram/'
        ]
    },
    {
        domain: 'organizational',
        title: 'AWS Service Catalog',
        summary: 'Create and manage catalogs of IT services approved for use on AWS with governance.',
        content: `
            <h4>Overview</h4>
            <p>AWS Service Catalog allows organizations to create and manage catalogs of IT services that are approved for use on AWS, achieving governance and compliance.</p>

            <h4>Key Concepts</h4>
            <ul>
                <li><strong>Products:</strong> CloudFormation templates defining AWS resources</li>
                <li><strong>Portfolios:</strong> Collections of products with access controls</li>
                <li><strong>Constraints:</strong> Rules applied to products (launch, template, tag)</li>
                <li><strong>Provisioned Products:</strong> Instances of products launched by users</li>
            </ul>

            <h4>Benefits</h4>
            <ul>
                <li>Standardization - consistent deployments across organization</li>
                <li>Self-service - users deploy pre-approved resources</li>
                <li>Governance - centrally manage what can be deployed</li>
                <li>Version control - manage product versions and updates</li>
            </ul>

            <h4>Constraint Types</h4>
            <ul>
                <li><strong>Launch Constraint:</strong> IAM role for provisioning (not user's role)</li>
                <li><strong>Template Constraint:</strong> Limit parameter values</li>
                <li><strong>Tag Update Constraint:</strong> Control which tags users can modify</li>
                <li><strong>Notification Constraint:</strong> SNS notifications on provisioning events</li>
                <li><strong>Stack Set Constraint:</strong> Deploy to multiple accounts/regions</li>
            </ul>

            <h4>Multi-Account Deployment</h4>
            <ul>
                <li>Share portfolios across AWS Organizations</li>
                <li>Use Stack Sets for multi-account/region deployments</li>
                <li>Centralized catalog with distributed provisioning</li>
            </ul>

            <h4>Use Cases</h4>
            <ul>
                <li>Standardized environment provisioning (dev/test/prod)</li>
                <li>Approved AMI catalogs</li>
                <li>Compliant database configurations</li>
                <li>Machine learning environments</li>
                <li>Account vending with Control Tower integration</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/servicecatalog/',
            'https://aws.amazon.com/servicecatalog/'
        ]
    },
    {
        domain: 'organizational',
        title: 'Cross-Account Access Strategies',
        summary: 'Methods and best practices for securely accessing resources across AWS accounts.',
        content: `
            <h4>IAM Role Cross-Account Access (Preferred)</h4>
            <ul>
                <li><strong>How it works:</strong> Assume IAM role in target account using STS</li>
                <li><strong>Benefits:</strong> Temporary credentials, no long-term secrets, auditable</li>
                <li><strong>Setup:</strong> Trust policy in target account, permissions in source account</li>
                <li><strong>External ID:</strong> Additional security for third-party access</li>
            </ul>

            <h4>Resource-Based Policies</h4>
            <ul>
                <li><strong>Services:</strong> S3, SNS, SQS, Lambda, API Gateway, Secrets Manager</li>
                <li><strong>How it works:</strong> Policy attached to resource grants cross-account access</li>
                <li><strong>When to use:</strong> Simple sharing, no role assumption needed</li>
                <li><strong>Example:</strong> S3 bucket policy allowing another account to read</li>
            </ul>

            <h4>Cross-Account Patterns</h4>
            <ul>
                <li><strong>Centralized Logging:</strong> CloudTrail, VPC Flow Logs to central account</li>
                <li><strong>Backup:</strong> AWS Backup vault cross-account backup</li>
                <li><strong>Shared Services:</strong> RAM for VPC, Transit Gateway sharing</li>
                <li><strong>CI/CD:</strong> CodePipeline deploying to multiple accounts</li>
            </ul>

            <h4>VPC-Level Cross-Account Access</h4>
            <ul>
                <li><strong>VPC Peering:</strong> Private network connection between VPCs</li>
                <li><strong>Transit Gateway:</strong> Hub-and-spoke multi-VPC/account connectivity</li>
                <li><strong>PrivateLink:</strong> Private connectivity to services via endpoints</li>
                <li><strong>VPN/Direct Connect:</strong> On-premises to multi-account AWS</li>
            </ul>

            <h4>Security Best Practices</h4>
            <ul>
                <li>Always use IAM roles over sharing credentials</li>
                <li>Implement least privilege permissions</li>
                <li>Use AWS STS session tags for fine-grained access control</li>
                <li>Monitor with CloudTrail (look for AssumeRole events)</li>
                <li>Use AWS Organizations SCPs as guardrails</li>
                <li>Require MFA for sensitive cross-account actions</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html',
            'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_aws-accounts.html'
        ]
    },
    {
        domain: 'organizational',
        title: 'Tagging Strategy and Cost Allocation',
        summary: 'Implementing consistent tagging across AWS Organizations for cost management and governance.',
        content: `
            <h4>Why Tagging Matters</h4>
            <ul>
                <li><strong>Cost Allocation:</strong> Track spending by team, project, environment</li>
                <li><strong>Automation:</strong> Target resources for scripts and operations</li>
                <li><strong>Access Control:</strong> Tag-based IAM policies (ABAC)</li>
                <li><strong>Compliance:</strong> Identify resources for audit and governance</li>
            </ul>

            <h4>AWS Organizations Tag Policies</h4>
            <ul>
                <li>Enforce standardized tags across all accounts</li>
                <li>Define tag keys and allowed values</li>
                <li>Require tags on resource creation</li>
                <li>Generate compliance reports</li>
                <li>Applied at OU or account level</li>
            </ul>

            <h4>Standard Tagging Schema</h4>
            <ul>
                <li><strong>Environment:</strong> dev, test, staging, prod</li>
                <li><strong>CostCenter:</strong> Finance code for billing</li>
                <li><strong>Project:</strong> Project or application name</li>
                <li><strong>Owner:</strong> Team or individual responsible</li>
                <li><strong>Compliance:</strong> HIPAA, PCI, SOC2, etc.</li>
                <li><strong>DataClassification:</strong> public, internal, confidential, restricted</li>
            </ul>

            <h4>Cost Allocation Tags</h4>
            <ul>
                <li>Activate cost allocation tags in billing console</li>
                <li>Appears in Cost and Usage Reports</li>
                <li>Enable filtering in Cost Explorer</li>
                <li>Track Reserved Instance utilization by tag</li>
            </ul>

            <h4>Tag Enforcement Methods</h4>
            <ul>
                <li><strong>Tag Policies:</strong> Organizations-level enforcement</li>
                <li><strong>SCPs:</strong> Prevent resource creation without required tags</li>
                <li><strong>AWS Config Rules:</strong> Detect non-compliant resources</li>
                <li><strong>CloudFormation:</strong> Tags in templates</li>
                <li><strong>Resource Groups:</strong> Tag Editor for bulk operations</li>
            </ul>

            <h4>Best Practices</h4>
            <ul>
                <li>Start with 5-10 mandatory tags</li>
                <li>Use consistent naming (lowercase, hyphens)</li>
                <li>Implement early - retrofitting is painful</li>
                <li>Automate tag compliance checks</li>
                <li>Review and update tagging strategy quarterly</li>
                <li>Use tag-based IAM policies for access control</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html',
            'https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/'
        ]
    },
    {
        domain: 'organizational',
        title: 'IAM Best Practices for Enterprise',
        summary: 'Identity and access management patterns for large-scale AWS deployments.',
        content: `
            <h4>Principle of Least Privilege</h4>
            <ul>
                <li>Grant only permissions required for specific tasks</li>
                <li>Start with minimal permissions, add as needed</li>
                <li>Use IAM Access Analyzer to identify unused permissions</li>
                <li>Regularly review and remove excessive permissions</li>
            </ul>

            <h4>Multi-Account IAM Strategy</h4>
            <ul>
                <li>Use AWS SSO (IAM Identity Center) for centralized access</li>
                <li>Create permission sets for common job functions</li>
                <li>Federate with corporate identity provider</li>
                <li>Separate human and machine identities</li>
            </ul>

            <h4>IAM Roles vs Users</h4>
            <ul>
                <li><strong>Use Roles for:</strong> AWS services, cross-account access, federated users</li>
                <li><strong>Use Users for:</strong> Emergency access only (break-glass)</li>
                <li><strong>Never use:</strong> Root account (except for very specific tasks)</li>
                <li><strong>Avoid:</strong> Long-term access keys for users</li>
            </ul>

            <h4>Policy Management</h4>
            <ul>
                <li><strong>AWS Managed Policies:</strong> Good starting point, less maintenance</li>
                <li><strong>Customer Managed Policies:</strong> Custom, reusable across roles</li>
                <li><strong>Inline Policies:</strong> One-off, tight coupling (use sparingly)</li>
                <li><strong>SCPs:</strong> Guardrails at organization level</li>
                <li><strong>Permission Boundaries:</strong> Maximum permissions for delegation</li>
            </ul>

            <h4>Attribute-Based Access Control (ABAC)</h4>
            <ul>
                <li>Use tags for fine-grained access control</li>
                <li>Scale permissions without policy updates</li>
                <li>Example: Users can only access resources with matching team tag</li>
                <li>Reduces number of policies needed</li>
            </ul>

            <h4>Security Best Practices</h4>
            <ul>
                <li>Enable MFA for all human access</li>
                <li>Rotate credentials regularly (automate with Secrets Manager)</li>
                <li>Use IAM roles for EC2/ECS/Lambda (never embed credentials)</li>
                <li>Monitor with CloudTrail and IAM Access Analyzer</li>
                <li>Set password policy requirements</li>
                <li>Use AWS STS session policies for temporary restrictions</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html',
            'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_attribute-based-access-control.html'
        ]
    },
    {
        domain: 'organizational',
        title: 'Security Hub and GuardDuty for Organizations',
        summary: 'Centralized security monitoring and threat detection across multiple AWS accounts.',
        content: `
            <h4>AWS Security Hub</h4>
            <p>Centralized view of security alerts and compliance status across AWS accounts:</p>
            <ul>
                <li>Aggregates findings from GuardDuty, Inspector, Macie, IAM Access Analyzer</li>
                <li>Multi-account support via Organizations integration</li>
                <li>Automated compliance checks (CIS, PCI-DSS, AWS Foundational Security)</li>
                <li>Custom insights and dashboards</li>
                <li>Integration with ticketing systems (Jira, ServiceNow)</li>
            </ul>

            <h4>AWS GuardDuty</h4>
            <p>Intelligent threat detection using machine learning:</p>
            <ul>
                <li>Monitors VPC Flow Logs, CloudTrail, DNS logs</li>
                <li>Detects: compromised instances, reconnaissance, account compromise</li>
                <li>Minimal setup - no agents or infrastructure</li>
                <li>Severity levels: Low, Medium, High</li>
                <li>Multi-account with delegated administrator</li>
            </ul>

            <h4>Multi-Account Setup</h4>
            <ul>
                <li><strong>Delegated Administrator:</strong> Security account manages findings</li>
                <li><strong>Automatic Enrollment:</strong> New accounts automatically enabled</li>
                <li><strong>Aggregation:</strong> All findings in central security account</li>
                <li><strong>S3 Protection:</strong> Monitor S3 API activity</li>
                <li><strong>EKS Protection:</strong> Monitor Kubernetes audit logs</li>
            </ul>

            <h4>Security Hub Standards</h4>
            <ul>
                <li><strong>AWS Foundational Security Best Practices:</strong> AWS recommendations</li>
                <li><strong>CIS AWS Foundations Benchmark:</strong> Industry standard</li>
                <li><strong>PCI DSS:</strong> Payment card industry compliance</li>
                <li><strong>Custom Standards:</strong> Define your own checks</li>
            </ul>

            <h4>Automated Remediation</h4>
            <ul>
                <li>EventBridge rules trigger on findings</li>
                <li>Lambda functions for automated response</li>
                <li>Systems Manager Automation documents</li>
                <li>SOAR integration (Splunk, Palo Alto Cortex XSOAR)</li>
            </ul>

            <h4>Best Practices</h4>
            <ul>
                <li>Enable in all accounts and regions</li>
                <li>Use delegated administrator for centralized management</li>
                <li>Automate remediation for common issues</li>
                <li>Suppress false positives carefully</li>
                <li>Integrate with incident response workflows</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/securityhub/',
            'https://docs.aws.amazon.com/guardduty/'
        ]
    },
    {
        domain: 'organizational',
        title: 'Delegated Administrator Accounts',
        summary: 'Distributing administrative responsibilities across AWS Organizations for security and operations.',
        content: `
            <h4>Overview</h4>
            <p>Delegated administrators allow you to designate member accounts to manage AWS services on behalf of your organization, reducing reliance on the management account.</p>

            <h4>Why Use Delegated Administrators</h4>
            <ul>
                <li>Reduce management account exposure</li>
                <li>Separate security and operational concerns</li>
                <li>Enable team-based service ownership</li>
                <li>Follow least privilege at account level</li>
            </ul>

            <h4>Services Supporting Delegation</h4>
            <ul>
                <li><strong>Security:</strong> Security Hub, GuardDuty, Macie, Audit Manager</li>
                <li><strong>Networking:</strong> VPC IPAM, Network Manager</li>
                <li><strong>Backup:</strong> AWS Backup</li>
                <li><strong>Operations:</strong> CloudFormation StackSets, Systems Manager</li>
                <li><strong>Compute:</strong> Compute Optimizer</li>
            </ul>

            <h4>Common Delegation Patterns</h4>
            <ul>
                <li><strong>Security Account:</strong> GuardDuty, Security Hub, Macie (centralized security)</li>
                <li><strong>Networking Account:</strong> VPC IPAM, Network Manager (centralized networking)</li>
                <li><strong>Operations Account:</strong> CloudFormation, Systems Manager (centralized ops)</li>
                <li><strong>Backup Account:</strong> AWS Backup (centralized backup management)</li>
            </ul>

            <h4>Setup Process</h4>
            <ul>
                <li>Enable service in management account</li>
                <li>Designate member account as delegated administrator</li>
                <li>Service-specific configurations in delegated account</li>
                <li>Automatic enrollment of new accounts (where supported)</li>
            </ul>

            <h4>Best Practices</h4>
            <ul>
                <li>Create dedicated accounts for delegated administration</li>
                <li>Limit access to delegated admin accounts</li>
                <li>Document which services are delegated and to which accounts</li>
                <li>Monitor delegated admin actions via CloudTrail</li>
                <li>Use separate accounts for security, networking, operations</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services_list.html',
            'https://docs.aws.amazon.com/organizations/latest/userguide/orgs_delegate_admin.html'
        ]
    },
    {
        domain: 'organizational',
        title: 'Organizational Unit Design Patterns',
        summary: 'Effective OU structures for different organizational needs and governance requirements.',
        content: `
            <h4>OU Design Principles</h4>
            <ul>
                <li>Balance between flexibility and governance</li>
                <li>Reflect organizational structure or workload types</li>
                <li>Plan for scale (5-level depth, 300 OUs per parent)</li>
                <li>SCPs and policies inherit down the hierarchy</li>
            </ul>

            <h4>Environment-Based Pattern</h4>
            <ul>
                <li><strong>Structure:</strong> Root → Security → Production → Staging → Development → Sandbox</li>
                <li><strong>Use case:</strong> SDLC lifecycle separation</li>
                <li><strong>Benefits:</strong> Clear blast radius, different SCP policies per environment</li>
                <li><strong>Example SCPs:</strong> Prod (restrict risky operations), Dev (allow experimentation)</li>
            </ul>

            <h4>Business Unit Pattern</h4>
            <ul>
                <li><strong>Structure:</strong> Root → BU1 → BU2 → BU3 (each with sub-OUs for envs)</li>
                <li><strong>Use case:</strong> Large enterprises with independent business units</li>
                <li><strong>Benefits:</strong> Business-level isolation, separate billing</li>
                <li><strong>Considerations:</strong> Shared services account at root level</li>
            </ul>

            <h4>Function-Based Pattern</h4>
            <ul>
                <li><strong>Structure:</strong> Root → Security → Infrastructure → Applications → Data</li>
                <li><strong>Use case:</strong> Workload type or technology stack</li>
                <li><strong>Benefits:</strong> Technical team ownership, specialized policies</li>
                <li><strong>Example:</strong> Data OU with HIPAA/compliance SCPs</li>
            </ul>

            <h4>Hybrid Pattern (Recommended)</h4>
            <ul>
                <li>Combine multiple approaches</li>
                <li>Top level: Core (Security, Infrastructure) + Business/Function</li>
                <li>Second level: Environment (Prod, Non-Prod)</li>
                <li>Example: Root → Core → Security → (Log Archive, Audit)</li>
            </ul>

            <h4>Special-Purpose OUs</h4>
            <ul>
                <li><strong>Security OU:</strong> Log Archive, Audit, Security Tooling</li>
                <li><strong>Suspended OU:</strong> For accounts pending decommission</li>
                <li><strong>Exceptions OU:</strong> Accounts requiring different policies</li>
                <li><strong>Sandbox OU:</strong> Experimentation with relaxed controls</li>
            </ul>

            <h4>Best Practices</h4>
            <ul>
                <li>Start simple, evolve as organization grows</li>
                <li>Document OU purpose and policies</li>
                <li>Limit OU depth (3-4 levels typically sufficient)</li>
                <li>Use consistent naming conventions</li>
                <li>Plan account migration paths between OUs</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/organizing-your-aws-environment.html',
            'https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html'
        ]
    },
    {
        domain: 'organizational',
        title: 'Account Vending and Automation',
        summary: 'Automated AWS account creation with standardized configurations and guardrails.',
        content: `
            <h4>Account Vending Overview</h4>
            <p>Automated process to provision new AWS accounts with pre-configured baseline security, networking, and compliance settings.</p>

            <h4>AWS Control Tower Account Factory</h4>
            <ul>
                <li>Built-in account vending through Service Catalog</li>
                <li>Automated baseline configuration (guardrails, VPC, SSO)</li>
                <li>Self-service portal for requesters</li>
                <li>Customizable with CloudFormation</li>
                <li>Integrates with ITSM tools</li>
            </ul>

            <h4>Custom Account Vending Machine (AVM)</h4>
            <ul>
                <li><strong>Trigger:</strong> Service Catalog, API, web portal</li>
                <li><strong>Orchestration:</strong> Step Functions, Lambda</li>
                <li><strong>Account Creation:</strong> Organizations API</li>
                <li><strong>Baseline:</strong> CloudFormation StackSets</li>
                <li><strong>Configuration:</strong> Systems Manager, Lambda</li>
            </ul>

            <h4>Baseline Components</h4>
            <ul>
                <li><strong>Security:</strong> CloudTrail, Config, GuardDuty, Security Hub</li>
                <li><strong>Networking:</strong> VPC, subnets, Transit Gateway attachment</li>
                <li><strong>IAM:</strong> Roles for cross-account access, SSO permission sets</li>
                <li><strong>Tagging:</strong> Mandatory tags (Owner, Environment, CostCenter)</li>
                <li><strong>Monitoring:</strong> CloudWatch, SNS topics, log aggregation</li>
            </ul>

            <h4>Account Lifecycle</h4>
            <ul>
                <li><strong>Request:</strong> User submits account request with metadata</li>
                <li><strong>Approval:</strong> Automated or manual approval workflow</li>
                <li><strong>Provision:</strong> Create account, apply baseline</li>
                <li><strong>Configure:</strong> Service-specific setup</li>
                <li><strong>Handoff:</strong> Notify owner, grant access</li>
                <li><strong>Manage:</strong> Ongoing compliance, updates</li>
                <li><strong>Decommission:</strong> Cleanup, suspension, deletion</li>
            </ul>

            <h4>Customization Hooks</h4>
            <ul>
                <li>Pre-provision validation (naming, quotas)</li>
                <li>Post-provision configuration (app-specific setup)</li>
                <li>Integration with ticketing systems</li>
                <li>Custom approval workflows</li>
                <li>Notification integrations (Slack, email)</li>
            </ul>

            <h4>Best Practices</h4>
            <ul>
                <li>Version control baseline configurations</li>
                <li>Test account vending in non-prod first</li>
                <li>Implement idempotent operations</li>
                <li>Monitor vending process with CloudWatch</li>
                <li>Document standard vs custom configurations</li>
                <li>Regular baseline updates via StackSets</li>
            </ul>
        `,
        links: [
            'https://aws.amazon.com/solutions/implementations/account-vending-machine/',
            'https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html'
        ]
    },
    {
        domain: 'organizational',
        title: 'AWS Config for Organizations',
        summary: 'Centralized compliance monitoring and resource configuration tracking across all accounts.',
        content: `
            <h4>AWS Config Overview</h4>
            <p>AWS Config provides a detailed view of resource configurations, tracks changes over time, and evaluates compliance against desired configurations.</p>

            <h4>Multi-Account Config Setup</h4>
            <ul>
                <li><strong>Aggregator:</strong> Central account collects data from all member accounts</li>
                <li><strong>Delegated Administrator:</strong> Non-management account manages Config</li>
                <li><strong>Automatic Enrollment:</strong> New accounts auto-enabled</li>
                <li><strong>Cross-Region:</strong> Aggregate data from all regions</li>
            </ul>

            <h4>Config Rules at Scale</h4>
            <ul>
                <li><strong>Organizational Rules:</strong> Deploy rules across all accounts</li>
                <li><strong>Conformance Packs:</strong> Pre-packaged sets of rules (PCI, HIPAA, CIS)</li>
                <li><strong>Custom Rules:</strong> Lambda-based evaluations</li>
                <li><strong>Compliance Dashboard:</strong> Organization-wide view</li>
            </ul>

            <h4>Common Config Rules</h4>
            <ul>
                <li>S3 bucket encryption and public access</li>
                <li>EC2 instances using approved AMIs</li>
                <li>RDS encryption at rest</li>
                <li>Security group rules (no 0.0.0.0/0)</li>
                <li>IAM password policy compliance</li>
                <li>Required tags on resources</li>
            </ul>

            <h4>Remediation</h4>
            <ul>
                <li><strong>Automatic:</strong> Systems Manager automation documents</li>
                <li><strong>Manual:</strong> Generate tickets for review</li>
                <li><strong>Custom:</strong> Lambda functions for complex fixes</li>
                <li><strong>Preventive:</strong> Use SCPs to prevent non-compliant resources</li>
            </ul>

            <h4>Integration with Other Services</h4>
            <ul>
                <li><strong>Security Hub:</strong> Config findings appear in Security Hub</li>
                <li><strong>Systems Manager:</strong> Automated remediation</li>
                <li><strong>CloudWatch Events:</strong> Real-time notifications</li>
                <li><strong>S3:</strong> Store configuration snapshots and history</li>
            </ul>

            <h4>Best Practices</h4>
            <ul>
                <li>Enable Config recorder in all regions and accounts</li>
                <li>Use conformance packs for compliance frameworks</li>
                <li>Store Config data in centralized S3 bucket (cross-account)</li>
                <li>Set up aggregators for organization-wide view</li>
                <li>Start with AWS managed rules before creating custom</li>
                <li>Automate remediation where possible</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/config/',
            'https://docs.aws.amazon.com/config/latest/developerguide/aggregate-data.html'
        ]
    },
    {
        domain: 'organizational',
        title: 'AWS CloudTrail for Organizations',
        summary: 'Centralized logging of all API activity across AWS accounts for security and compliance.',
        content: `
            <h4>CloudTrail Overview</h4>
            <p>AWS CloudTrail logs all API calls made in your AWS account, providing audit trail for security analysis, compliance, and operational troubleshooting.</p>

            <h4>Organization Trails</h4>
            <ul>
                <li>Single trail logs events for all accounts in organization</li>
                <li>Created in management account</li>
                <li>Automatically applies to new member accounts</li>
                <li>Logs delivered to central S3 bucket</li>
                <li>Cannot be modified by member accounts</li>
            </ul>

            <h4>Event Types</h4>
            <ul>
                <li><strong>Management Events:</strong> Control plane operations (CreateInstance, DeleteBucket)</li>
                <li><strong>Data Events:</strong> S3 object-level, Lambda invocations (high volume)</li>
                <li><strong>Insights Events:</strong> Anomaly detection for unusual activity</li>
            </ul>

            <h4>Log File Integrity</h4>
            <ul>
                <li>Digest files for tamper detection</li>
                <li>Cryptographic validation</li>
                <li>Critical for compliance (SOC, PCI-DSS)</li>
            </ul>

            <h4>CloudTrail Lake</h4>
            <ul>
                <li>SQL-based querying of CloudTrail logs</li>
                <li>7-year retention available</li>
                <li>Federated query across multiple accounts</li>
                <li>Event data stores for different use cases</li>
            </ul>

            <h4>Integration and Analysis</h4>
            <ul>
                <li><strong>CloudWatch Logs:</strong> Real-time monitoring and alerting</li>
                <li><strong>EventBridge:</strong> Trigger automated responses</li>
                <li><strong>Athena:</strong> Query logs in S3</li>
                <li><strong>Security Hub:</strong> Security findings from CloudTrail</li>
                <li><strong>SIEM:</strong> Export to Splunk, Elasticsearch, etc.</li>
            </ul>

            <h4>Security Best Practices</h4>
            <ul>
                <li>Enable organization trail in all regions</li>
                <li>Log to S3 bucket with MFA delete enabled</li>
                <li>Enable log file validation</li>
                <li>Encrypt logs with KMS</li>
                <li>Restrict S3 bucket access to security team only</li>
                <li>Set up alerts for critical API calls (root account usage)</li>
                <li>Enable CloudTrail Insights for anomaly detection</li>
            </ul>

            <h4>Cost Optimization</h4>
            <ul>
                <li>First organization trail is free</li>
                <li>Data events incur costs (selective logging)</li>
                <li>Use S3 Intelligent-Tiering for log storage</li>
                <li>CloudTrail Lake pricing based on ingestion and storage</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-trail-organization.html',
            'https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake.html'
        ]
    },

    // Domain 2: Design for New Solutions (29%)
    {
        domain: 'new-solutions',
        title: 'Amazon Aurora',
        summary: 'MySQL and PostgreSQL-compatible relational database built for the cloud with high performance and availability.',
        content: `
            <h4>Overview</h4>
            <p>Aurora is a fully managed relational database engine compatible with MySQL and PostgreSQL. It combines the speed and reliability of high-end commercial databases with the simplicity and cost-effectiveness of open-source databases.</p>

            <h4>Performance Benefits</h4>
            <ul>
                <li>5x throughput of MySQL, 3x throughput of PostgreSQL</li>
                <li>Up to 128 TB of auto-scaling storage (10GB increments)</li>
                <li>Up to 15 read replicas with < 10ms replica lag</li>
                <li>Storage automatically replicated 6 ways across 3 AZs</li>
            </ul>

            <h4>High Availability</h4>
            <ul>
                <li>Multi-AZ by default - storage striped across 100s of volumes</li>
                <li>Automatic failover to read replica in < 30 seconds</li>
                <li>Continuous backup to S3 (automated backups)</li>
                <li>Point-in-time recovery up to last 5 minutes</li>
                <li>Aurora Global Database for disaster recovery (< 1 second RPO)</li>
            </ul>

            <h4>Aurora Serverless</h4>
            <ul>
                <li>Auto-scales compute capacity based on application demand</li>
                <li>Scales to zero when not in use (pay only for storage)</li>
                <li>Good for: infrequent/intermittent workloads, dev/test, new applications</li>
                <li>Aurora Serverless v2: scales in finer increments, faster scaling</li>
            </ul>

            <h4>When to Use Aurora vs RDS</h4>
            <p><strong>Choose Aurora for:</strong></p>
            <ul>
                <li>High performance requirements (OLTP workloads)</li>
                <li>Need for high availability and durability</li>
                <li>Many read replicas (up to 15)</li>
                <li>MySQL or PostgreSQL compatibility</li>
            </ul>
            <p><strong>Choose standard RDS for:</strong></p>
            <ul>
                <li>Other database engines (SQL Server, Oracle, MariaDB)</li>
                <li>Lower cost for small workloads</li>
                <li>Specific version requirements</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/',
            'https://aws.amazon.com/rds/aurora/'
        ]
    },
    {
        domain: 'new-solutions',
        title: 'Amazon DynamoDB',
        summary: 'Fully managed NoSQL database service providing fast and predictable performance with seamless scalability.',
        content: `
            <h4>Overview</h4>
            <p>DynamoDB is a serverless, NoSQL database designed for applications that need consistent single-digit millisecond latency at any scale.</p>

            <h4>Key Features</h4>
            <ul>
                <li>Fully managed with automatic scaling</li>
                <li>Single-digit millisecond latency at any scale</li>
                <li>Supports document and key-value data models</li>
                <li>Built-in security, backup, restore, and in-memory caching</li>
                <li>Global tables for multi-region, multi-active deployments</li>
            </ul>

            <h4>Capacity Modes</h4>
            <ul>
                <li><strong>On-Demand:</strong> Pay per request, no capacity planning, good for unpredictable workloads</li>
                <li><strong>Provisioned:</strong> Specify RCU/WCU, can use auto-scaling, more cost-effective for predictable traffic</li>
            </ul>

            <h4>DynamoDB Accelerator (DAX)</h4>
            <ul>
                <li>In-memory cache for DynamoDB</li>
                <li>Microsecond latency for cached reads</li>
                <li>No application code changes required</li>
                <li>Ideal for read-heavy workloads</li>
            </ul>

            <h4>Access Patterns</h4>
            <ul>
                <li><strong>Primary Key:</strong> Partition key (hash) only, or composite (partition + sort key)</li>
                <li><strong>Secondary Indexes:</strong> GSI (different partition key), LSI (same partition, different sort)</li>
                <li><strong>Query:</strong> Efficient retrieval using keys</li>
                <li><strong>Scan:</strong> Read entire table (inefficient, use sparingly)</li>
            </ul>

            <h4>Best Practices</h4>
            <ul>
                <li>Design partition keys for even data distribution</li>
                <li>Use composite keys for one-to-many relationships</li>
                <li>Leverage GSIs for alternate query patterns</li>
                <li>Use DynamoDB Streams for change data capture</li>
                <li>Enable point-in-time recovery for critical tables</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/amazondynamodb/',
            'https://aws.amazon.com/dynamodb/'
        ]
    },
    {
        domain: 'new-solutions',
        title: 'Amazon RDS Advanced Features',
        summary: 'Deep dive into RDS capabilities beyond basic database hosting for production workloads.',
        content: `
            <h4>RDS Database Engines</h4>
            <ul>
                <li><strong>MySQL, PostgreSQL, MariaDB:</strong> Open-source options</li>
                <li><strong>Oracle, SQL Server:</strong> Commercial licenses (BYOL or License Included)</li>
                <li><strong>Aurora:</strong> MySQL/PostgreSQL compatible, cloud-native</li>
            </ul>

            <h4>High Availability</h4>
            <ul>
                <li><strong>Multi-AZ:</strong> Synchronous replication to standby in different AZ</li>
                <li>Automatic failover (60-120 seconds)</li>
                <li>No downtime for maintenance with Multi-AZ</li>
                <li>Same endpoint after failover (DNS update)</li>
                <li>Not for read scaling (standby not accessible)</li>
            </ul>

            <h4>Read Replicas</h4>
            <ul>
                <li>Asynchronous replication from primary</li>
                <li>Up to 15 read replicas (Aurora), 5 for others</li>
                <li>Can be in different regions (cross-region)</li>
                <li>Can be promoted to standalone DB</li>
                <li>Use for: read scaling, analytics, disaster recovery</li>
            </ul>

            <h4>Backup and Restore</h4>
            <ul>
                <li><strong>Automated Backups:</strong> Point-in-time recovery, 1-35 days retention</li>
                <li><strong>Manual Snapshots:</strong> User-initiated, kept until deleted</li>
                <li>Backups stored in S3</li>
                <li>Copy snapshots across regions</li>
                <li>Share snapshots with other accounts</li>
            </ul>

            <h4>Storage Types</h4>
            <ul>
                <li><strong>General Purpose (gp3/gp2):</strong> Cost-effective, < 10,000 IOPS</li>
                <li><strong>Provisioned IOPS (io1):</strong> High performance, 64,000 IOPS max, for OLTP</li>
                <li><strong>Magnetic:</strong> Legacy, not recommended</li>
                <li>Storage auto-scaling available</li>
            </ul>

            <h4>RDS Proxy</h4>
            <ul>
                <li>Fully managed database proxy</li>
                <li>Connection pooling (reduce DB connections)</li>
                <li>Improve failover time by 66%</li>
                <li>Enforce IAM authentication</li>
                <li>Never publicly accessible (VPC only)</li>
                <li>Use case: Lambda functions, connection-heavy apps</li>
            </ul>

            <h4>Security Features</h4>
            <ul>
                <li><strong>Encryption at rest:</strong> KMS, enabled at creation</li>
                <li><strong>Encryption in transit:</strong> SSL/TLS connections</li>
                <li><strong>IAM Database Authentication:</strong> Token-based (MySQL, PostgreSQL)</li>
                <li><strong>Network isolation:</strong> VPC, security groups</li>
                <li><strong>Auditing:</strong> Database audit logs to CloudWatch</li>
            </ul>

            <h4>Performance Insights</h4>
            <ul>
                <li>Visual dashboard for database performance</li>
                <li>Identify top SQL queries</li>
                <li>Wait event analysis</li>
                <li>7 days free retention, up to 2 years</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/rds/',
            'https://aws.amazon.com/rds/'
        ]
    },
    {
        domain: 'new-solutions',
        title: 'Amazon ElastiCache',
        summary: 'Fully managed in-memory caching service supporting Redis and Memcached.',
        content: `
            <h4>ElastiCache Overview</h4>
            <p>ElastiCache is a fully managed in-memory data store and cache service supporting Redis and Memcached engines.</p>

            <h4>Redis vs Memcached</h4>
            <ul>
                <li><strong>Redis:</strong> Advanced data structures (lists, sets, sorted sets), persistence, replication, pub/sub, Lua scripting, geospatial, multi-AZ</li>
                <li><strong>Memcached:</strong> Simple key-value, multi-threaded, horizontal scaling (sharding), no persistence, no replication</li>
            </ul>

            <h4>Redis Cluster Modes</h4>
            <ul>
                <li><strong>Cluster Mode Disabled:</strong> One shard (primary + replicas), max 5 replicas, vertical scaling only</li>
                <li><strong>Cluster Mode Enabled:</strong> Multiple shards (data partitioned), up to 500 nodes, horizontal scaling</li>
            </ul>

            <h4>High Availability (Redis)</h4>
            <ul>
                <li><strong>Multi-AZ with Auto-Failover:</strong> Automatic promotion of replica</li>
                <li>Read replicas for read scaling</li>
                <li>Backup and restore from S3</li>
                <li>Append-only file (AOF) persistence</li>
            </ul>

            <h4>Redis Advanced Features</h4>
            <ul>
                <li><strong>Sorted Sets:</strong> Leaderboards, time-series data</li>
                <li><strong>HyperLogLog:</strong> Count unique items (cardinality)</li>
                <li><strong>Geospatial:</strong> Location-based queries</li>
                <li><strong>Pub/Sub:</strong> Messaging between components</li>
                <li><strong>Lua Scripts:</strong> Server-side scripting</li>
                <li><strong>Transactions:</strong> MULTI/EXEC commands</li>
            </ul>

            <h4>Caching Strategies</h4>
            <ul>
                <li><strong>Lazy Loading:</strong> Load data into cache on cache miss (read-through)</li>
                <li><strong>Write-Through:</strong> Write to cache when writing to DB (always fresh)</li>
                <li><strong>Adding TTL:</strong> Expire old data automatically</li>
                <li>Combine strategies for optimal performance</li>
            </ul>

            <h4>Security</h4>
            <ul>
                <li><strong>Redis AUTH:</strong> Password/token authentication</li>
                <li><strong>IAM Authentication:</strong> Redis 6+ with RBAC</li>
                <li><strong>Encryption:</strong> At-rest (KMS) and in-transit (TLS)</li>
                <li><strong>VPC:</strong> Network isolation with security groups</li>
                <li>No public IP addressing</li>
            </ul>

            <h4>Use Cases</h4>
            <ul>
                <li><strong>Redis:</strong> Session store, gaming leaderboards, real-time analytics, queuing, chat/messaging</li>
                <li><strong>Memcached:</strong> Simple caching, object caching, distributed caching</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/elasticache/',
            'https://aws.amazon.com/elasticache/'
        ]
    },
    {
        domain: 'new-solutions',
        title: 'Amazon DocumentDB',
        summary: 'MongoDB-compatible document database designed for JSON workloads with AWS scale and reliability.',
        content: `
            <h4>DocumentDB Overview</h4>
            <p>Amazon DocumentDB is a fully managed document database service that supports MongoDB workloads with AWS scalability, durability, and availability.</p>

            <h4>MongoDB Compatibility</h4>
            <ul>
                <li>Compatible with MongoDB 3.6, 4.0, 5.0 APIs</li>
                <li>Most MongoDB drivers work without changes</li>
                <li>Supports MongoDB query language and indexing</li>
                <li>Not 100% compatible (some features differ)</li>
            </ul>

            <h4>Architecture</h4>
            <ul>
                <li>Storage separated from compute (similar to Aurora)</li>
                <li>Storage automatically grows up to 64 TB (10 GB increments)</li>
                <li>6 copies of data across 3 AZs</li>
                <li>Up to 15 read replicas</li>
            </ul>

            <h4>High Availability</h4>
            <ul>
                <li>Automatic failover to replica (< 30 seconds)</li>
                <li>Continuous backup to S3</li>
                <li>Point-in-time recovery (1-35 days)</li>
                <li>Snapshot backups</li>
            </ul>

            <h4>Scaling</h4>
            <ul>
                <li><strong>Vertical:</strong> Scale instance types up/down</li>
                <li><strong>Read Scaling:</strong> Add read replicas</li>
                <li><strong>Storage:</strong> Automatic scaling (no downtime)</li>
                <li>Global Clusters for cross-region replication</li>
            </ul>

            <h4>Security</h4>
            <ul>
                <li>VPC isolation</li>
                <li>Encryption at rest (KMS)</li>
                <li>Encryption in transit (TLS)</li>
                <li>IAM authentication (not MongoDB auth)</li>
                <li>Audit logging to CloudWatch</li>
            </ul>

            <h4>When to Use DocumentDB</h4>
            <ul>
                <li>Need MongoDB compatibility with AWS management</li>
                <li>Scalable document database</li>
                <li>High availability requirements</li>
                <li>Automated backups and patching</li>
                <li><strong>Not for:</strong> Strict MongoDB compatibility needs (use MongoDB Atlas or self-managed)</li>
            </ul>

            <h4>Best Practices</h4>
            <ul>
                <li>Test MongoDB application compatibility before migration</li>
                <li>Use read replicas for read-heavy workloads</li>
                <li>Enable audit logs for compliance</li>
                <li>Use appropriate indexes for query performance</li>
                <li>Monitor with CloudWatch and Performance Insights</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/documentdb/',
            'https://aws.amazon.com/documentdb/'
        ]
    },
    {
        domain: 'new-solutions',
        title: 'Amazon Neptune',
        summary: 'Fully managed graph database service for highly connected datasets.',
        content: `
            <h4>Neptune Overview</h4>
            <p>Amazon Neptune is a fast, reliable, fully managed graph database service optimized for storing billions of relationships and querying with milliseconds latency.</p>

            <h4>Graph Models Supported</h4>
            <ul>
                <li><strong>Property Graph:</strong> Apache TinkerPop Gremlin query language</li>
                <li><strong>RDF Graph:</strong> SPARQL query language, W3C standards</li>
                <li>Both models supported on same graph</li>
            </ul>

            <h4>Architecture</h4>
            <ul>
                <li>Purpose-built graph database engine</li>
                <li>Storage layer replicates data 6 ways across 3 AZs</li>
                <li>Up to 15 read replicas</li>
                <li>Storage scales automatically up to 128 TB</li>
            </ul>

            <h4>High Availability</h4>
            <ul>
                <li>Multi-AZ by default</li>
                <li>Automatic failover (< 30 seconds)</li>
                <li>Continuous backup to S3</li>
                <li>Point-in-time recovery (35 days)</li>
                <li>Global Database for cross-region DR</li>
            </ul>

            <h4>Neptune ML</h4>
            <ul>
                <li>Machine learning on graph data</li>
                <li>Integration with Amazon SageMaker</li>
                <li>Graph Neural Networks (GNN)</li>
                <li>Use cases: Fraud detection, recommendation engines</li>
            </ul>

            <h4>Security</h4>
            <ul>
                <li>VPC isolation</li>
                <li>IAM authentication</li>
                <li>Encryption at rest (KMS)</li>
                <li>Encryption in transit (TLS)</li>
                <li>Audit logs to CloudWatch</li>
            </ul>

            <h4>Use Cases</h4>
            <ul>
                <li><strong>Social Networks:</strong> Friend connections, recommendations</li>
                <li><strong>Knowledge Graphs:</strong> Wikipedia-style linked data</li>
                <li><strong>Fraud Detection:</strong> Pattern analysis in transactions</li>
                <li><strong>Recommendation Engines:</strong> Product recommendations</li>
                <li><strong>Network/IT Operations:</strong> Infrastructure dependencies</li>
                <li><strong>Life Sciences:</strong> Drug discovery, protein interactions</li>
            </ul>

            <h4>When to Choose Neptune</h4>
            <ul>
                <li>Highly connected data with complex relationships</li>
                <li>Need graph traversals and pattern matching</li>
                <li>Fraud detection with relationship analysis</li>
                <li><strong>Not for:</strong> Simple tabular data (use RDS/DynamoDB), document data (use DocumentDB)</li>
            </ul>

            <h4>Best Practices</h4>
            <ul>
                <li>Design graph model for query patterns</li>
                <li>Use read replicas for read scaling</li>
                <li>Leverage Neptune Streams for change data capture</li>
                <li>Use bulk loader for initial data import</li>
                <li>Monitor with CloudWatch and enable audit logs</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/neptune/',
            'https://aws.amazon.com/neptune/'
        ]
    },
    {
        domain: 'new-solutions',
        title: 'AWS Lambda and Serverless',
        summary: 'Event-driven compute service for running code without provisioning servers.',
        content: `
            <h4>Overview</h4>
            <p>AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume.</p>

            <h4>Key Characteristics</h4>
            <ul>
                <li>Execution time: up to 15 minutes per invocation</li>
                <li>Memory: 128 MB to 10,240 MB (CPU scales with memory)</li>
                <li>Ephemeral storage: up to 10 GB in /tmp</li>
                <li>Deployment package: up to 50 MB zipped, 250 MB unzipped</li>
                <li>Concurrent executions: 1000 by default (soft limit)</li>
            </ul>

            <h4>Invocation Types</h4>
            <ul>
                <li><strong>Synchronous:</strong> Wait for response (API Gateway, Application Load Balancer)</li>
                <li><strong>Asynchronous:</strong> Event queued, retries on failure (S3, SNS, EventBridge)</li>
                <li><strong>Stream-based:</strong> Poll-based invocation (Kinesis, DynamoDB Streams, SQS)</li>
            </ul>

            <h4>Lambda Layers</h4>
            <ul>
                <li>Shared code and dependencies across functions</li>
                <li>Up to 5 layers per function</li>
                <li>Reduces deployment package size</li>
                <li>Can be shared across accounts using resource policies</li>
            </ul>

            <h4>Performance Optimization</h4>
            <ul>
                <li><strong>Provisioned Concurrency:</strong> Pre-initialized execution environments (reduces cold starts)</li>
                <li><strong>Reserved Concurrency:</strong> Guarantee capacity, prevent throttling</li>
                <li>Keep functions warm with EventBridge scheduled rules</li>
                <li>Use environment variables for configuration</li>
                <li>Reuse database connections (outside handler)</li>
            </ul>

            <h4>Serverless Application Patterns</h4>
            <ul>
                <li><strong>Web APIs:</strong> API Gateway + Lambda + DynamoDB</li>
                <li><strong>Event Processing:</strong> S3/SNS → Lambda → downstream services</li>
                <li><strong>Data Transformation:</strong> Kinesis → Lambda → S3/Redshift</li>
                <li><strong>Scheduled Tasks:</strong> EventBridge → Lambda</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/lambda/',
            'https://aws.amazon.com/lambda/'
        ]
    },
    {
        domain: 'new-solutions',
        title: 'Amazon EC2 Advanced Features',
        summary: 'Deep dive into EC2 instance types, placement groups, and advanced configurations for SA Pro.',
        content: `
            <h4>Instance Families and Selection</h4>
            <ul>
                <li><strong>General Purpose (T, M):</strong> Balanced compute, memory, networking</li>
                <li><strong>Compute Optimized (C):</strong> High-performance processors</li>
                <li><strong>Memory Optimized (R, X, High Memory):</strong> Fast performance for memory-intensive workloads</li>
                <li><strong>Storage Optimized (I, D, H):</strong> High sequential read/write to local storage</li>
                <li><strong>Accelerated Computing (P, G, F):</strong> GPU, FPGA for ML/graphics</li>
            </ul>

            <h4>Placement Groups</h4>
            <ul>
                <li><strong>Cluster:</strong> Low-latency, high-throughput (same AZ, same rack). Use for: HPC, tightly coupled apps</li>
                <li><strong>Partition:</strong> Spread across logical partitions, each with own rack. Use for: Hadoop, Cassandra, Kafka</li>
                <li><strong>Spread:</strong> Each instance on separate hardware. Use for: Critical instances, max 7 per AZ</li>
            </ul>

            <h4>Enhanced Networking</h4>
            <ul>
                <li><strong>ENA (Elastic Network Adapter):</strong> Up to 100 Gbps, lower latency, higher PPS</li>
                <li><strong>EFA (Elastic Fabric Adapter):</strong> HPC and ML, OS-bypass, low latency</li>
                <li><strong>SR-IOV:</strong> Direct device access for network performance</li>
            </ul>

            <h4>Spot Instances</h4>
            <ul>
                <li>Up to 90% discount over On-Demand</li>
                <li>2-minute interruption warning</li>
                <li><strong>Spot Fleet:</strong> Mix of instance types to meet capacity</li>
                <li><strong>Spot Blocks:</strong> Defined duration (1-6 hours, deprecated)</li>
                <li><strong>Best for:</strong> Batch jobs, big data, CI/CD, stateless web servers</li>
            </ul>

            <h4>Hibernation</h4>
            <ul>
                <li>RAM contents saved to EBS root volume</li>
                <li>Fast startup (instance state preserved)</li>
                <li>Up to 60 days hibernation</li>
                <li>Use case: Long-running processes, pre-warmed applications</li>
            </ul>

            <h4>Capacity Reservations</h4>
            <ul>
                <li><strong>On-Demand Capacity Reservations:</strong> Reserve capacity in specific AZ</li>
                <li>No commitment, pay On-Demand rate</li>
                <li>Combine with Savings Plans for discounts</li>
                <li>Use case: Disaster recovery, regulatory requirements</li>
            </ul>

            <h4>EC2 Image Builder</h4>
            <ul>
                <li>Automate creation and maintenance of AMIs</li>
                <li>Pipeline for build, test, distribute</li>
                <li>Version control for images</li>
                <li>Security patching automation</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/ec2/',
            'https://aws.amazon.com/ec2/instance-types/'
        ]
    },
    {
        domain: 'new-solutions',
        title: 'Amazon ECS and AWS Fargate',
        summary: 'Container orchestration with ECS and serverless containers using Fargate.',
        content: `
            <h4>Amazon ECS Overview</h4>
            <p>Fully managed container orchestration service supporting Docker and containerd runtimes.</p>

            <h4>Launch Types</h4>
            <ul>
                <li><strong>EC2 Launch Type:</strong> You manage EC2 instances, more control, cheaper at scale</li>
                <li><strong>Fargate Launch Type:</strong> Serverless, AWS manages infrastructure, pay per vCPU/memory</li>
            </ul>

            <h4>Key Concepts</h4>
            <ul>
                <li><strong>Task Definition:</strong> Blueprint for application (Docker image, CPU, memory, networking)</li>
                <li><strong>Task:</strong> Instantiation of task definition, ephemeral</li>
                <li><strong>Service:</strong> Maintains desired count of tasks, integrates with ELB</li>
                <li><strong>Cluster:</strong> Logical grouping of tasks or services</li>
            </ul>

            <h4>Fargate Benefits</h4>
            <ul>
                <li>No infrastructure management</li>
                <li>Right-sized compute</li>
                <li>Integrated with VPC networking</li>
                <li>Fargate Spot for 70% discount</li>
                <li>Built-in isolation (each task has own kernel)</li>
            </ul>

            <h4>ECS Networking</h4>
            <ul>
                <li><strong>awsvpc Mode:</strong> Each task gets ENI with private IP (Fargate only supports this)</li>
                <li><strong>bridge Mode:</strong> Uses Docker bridge network (EC2 only)</li>
                <li><strong>host Mode:</strong> Task uses host network (EC2 only, for high performance)</li>
            </ul>

            <h4>Service Auto Scaling</h4>
            <ul>
                <li><strong>Target Tracking:</strong> Scale based on metric target (CPU, memory)</li>
                <li><strong>Step Scaling:</strong> Scale based on CloudWatch alarms</li>
                <li><strong>Scheduled Scaling:</strong> Predictable patterns</li>
                <li>Works with both EC2 and Fargate</li>
            </ul>

            <h4>Integration Features</h4>
            <ul>
                <li><strong>ALB/NLB:</strong> Load balancing with dynamic port mapping</li>
                <li><strong>Service Discovery:</strong> AWS Cloud Map for DNS-based discovery</li>
                <li><strong>Secrets:</strong> Secrets Manager or SSM Parameter Store</li>
                <li><strong>Logging:</strong> CloudWatch Logs, Firehose, Fluentd</li>
                <li><strong>Monitoring:</strong> Container Insights</li>
            </ul>

            <h4>When to Use ECS vs EKS</h4>
            <ul>
                <li><strong>ECS:</strong> AWS-native, simpler, tighter AWS integration, easier to learn</li>
                <li><strong>EKS:</strong> Kubernetes standard, portable, complex workloads, existing K8s expertise</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/ecs/',
            'https://aws.amazon.com/fargate/'
        ]
    },
    {
        domain: 'new-solutions',
        title: 'Amazon EKS (Elastic Kubernetes Service)',
        summary: 'Managed Kubernetes service for running containerized applications at scale.',
        content: `
            <h4>Amazon EKS Overview</h4>
            <p>Fully managed Kubernetes service that makes it easy to run Kubernetes on AWS without installing and operating your own control plane.</p>

            <h4>EKS Components</h4>
            <ul>
                <li><strong>Control Plane:</strong> Managed by AWS (API server, etcd, scheduler)</li>
                <li><strong>Worker Nodes:</strong> EC2 instances or Fargate</li>
                <li><strong>Node Groups:</strong> Managed or self-managed</li>
            </ul>

            <h4>Compute Options</h4>
            <ul>
                <li><strong>Managed Node Groups:</strong> AWS manages EC2 lifecycle, auto-scaling, updates</li>
                <li><strong>Self-Managed Nodes:</strong> You manage EC2 instances, more control</li>
                <li><strong>Fargate Pods:</strong> Serverless, no node management</li>
            </ul>

            <h4>EKS Networking</h4>
            <ul>
                <li><strong>VPC CNI:</strong> Native VPC networking, each pod gets VPC IP</li>
                <li><strong>Security Groups for Pods:</strong> Pod-level security group rules</li>
                <li><strong>Load Balancer Controller:</strong> ALB/NLB for Kubernetes services</li>
                <li><strong>Private Clusters:</strong> Control plane in private subnets</li>
            </ul>

            <h4>Add-Ons and Integrations</h4>
            <ul>
                <li><strong>IAM Roles for Service Accounts (IRSA):</strong> Fine-grained IAM for pods</li>
                <li><strong>EBS CSI Driver:</strong> Persistent volumes using EBS</li>
                <li><strong>EFS CSI Driver:</strong> Shared persistent volumes</li>
                <li><strong>FSx for Lustre:</strong> High-performance file system</li>
                <li><strong>Secrets Manager:</strong> External secrets operator</li>
            </ul>

            <h4>EKS Observability</h4>
            <ul>
                <li><strong>Control Plane Logging:</strong> CloudWatch Logs (API, audit, authenticator)</li>
                <li><strong>Container Insights:</strong> Metrics and logs for EKS</li>
                <li><strong>Prometheus/Grafana:</strong> AMP (Amazon Managed Prometheus), AMG (Grafana)</li>
            </ul>

            <h4>Multi-Tenancy and Security</h4>
            <ul>
                <li>Namespaces for logical isolation</li>
                <li>Network policies for traffic control</li>
                <li>Pod Security Standards (PSS)</li>
                <li>OPA/Gatekeeper for policy enforcement</li>
            </ul>

            <h4>Best Practices</h4>
            <ul>
                <li>Use managed node groups for easier operations</li>
                <li>Implement IRSA for pod-level IAM</li>
                <li>Enable control plane logging</li>
                <li>Use Fargate for serverless pods</li>
                <li>Implement cluster autoscaler or Karpenter</li>
                <li>Keep Kubernetes version up to date</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/eks/',
            'https://aws.amazon.com/eks/'
        ]
    },
    {
        domain: 'new-solutions',
        title: 'AWS Batch',
        summary: 'Fully managed batch processing service for running jobs at any scale.',
        content: `
            <h4>AWS Batch Overview</h4>
            <p>AWS Batch enables you to run batch computing workloads on AWS, automatically provisioning compute resources based on job requirements.</p>

            <h4>Key Components</h4>
            <ul>
                <li><strong>Jobs:</strong> Unit of work (shell script, Docker container)</li>
                <li><strong>Job Definitions:</strong> Template for jobs (image, vCPU, memory, IAM role)</li>
                <li><strong>Job Queues:</strong> Jobs wait in queue until compute environment has capacity</li>
                <li><strong>Compute Environments:</strong> Managed or unmanaged compute resources</li>
            </ul>

            <h4>Compute Environment Types</h4>
            <ul>
                <li><strong>Managed:</strong> AWS provisions and scales EC2/Spot/Fargate</li>
                <li><strong>Unmanaged:</strong> You manage compute resources (EC2 instances)</li>
                <li><strong>Fargate:</strong> Serverless, no EC2 management</li>
            </ul>

            <h4>Job Types</h4>
            <ul>
                <li><strong>Single:</strong> One container, one job</li>
                <li><strong>Array:</strong> Collection of related jobs (e.g., process 1000 files)</li>
                <li><strong>Multi-node Parallel:</strong> Distributed job across multiple nodes (MPI, Horovod)</li>
            </ul>

            <h4>Scheduling and Dependencies</h4>
            <ul>
                <li>Jobs can depend on other jobs (DAG)</li>
                <li>Integrates with EventBridge for scheduled jobs</li>
                <li>Step Functions for complex workflows</li>
            </ul>

            <h4>Cost Optimization</h4>
            <ul>
                <li>Use Spot Instances for fault-tolerant workloads (up to 90% savings)</li>
                <li>Fargate Spot for containerized batch jobs</li>
                <li>Auto-scaling based on job queue depth</li>
                <li>Pay only for resources consumed</li>
            </ul>

            <h4>Use Cases</h4>
            <ul>
                <li>Financial services risk modeling</li>
                <li>Drug discovery and genomics</li>
                <li>Digital media rendering</li>
                <li>Machine learning training</li>
                <li>Log analysis and ETL</li>
            </ul>

            <h4>Best Practices</h4>
            <ul>
                <li>Use Fargate for simpler operations</li>
                <li>Leverage Spot for cost savings</li>
                <li>Monitor with CloudWatch metrics</li>
                <li>Use array jobs for parameter sweeps</li>
                <li>Implement retry strategies for transient failures</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/batch/',
            'https://aws.amazon.com/batch/'
        ]
    },
    {
        domain: 'new-solutions',
        title: 'AWS Step Functions',
        summary: 'Visual workflow orchestration for distributed applications and microservices.',
        content: `
            <h4>Step Functions Overview</h4>
            <p>AWS Step Functions is a serverless orchestration service that lets you combine AWS services into serverless workflows using visual workflows.</p>

            <h4>Workflow Types</h4>
            <ul>
                <li><strong>Standard:</strong> Long-running (up to 1 year), exactly-once execution, $0.025 per 1000 state transitions</li>
                <li><strong>Express:</strong> High-volume (up to 5 min), at-least-once execution, priced by executions and duration</li>
            </ul>

            <h4>State Types</h4>
            <ul>
                <li><strong>Task:</strong> Single unit of work (Lambda, Batch, SNS, SQS, Glue, SageMaker, etc.)</li>
                <li><strong>Choice:</strong> Branch based on conditions</li>
                <li><strong>Parallel:</strong> Execute branches in parallel</li>
                <li><strong>Wait:</strong> Delay for time period or until timestamp</li>
                <li><strong>Map:</strong> Iterate over array of items</li>
                <li><strong>Pass:</strong> Pass input to output, inject fixed data</li>
                <li><strong>Succeed/Fail:</strong> Terminal states</li>
            </ul>

            <h4>Service Integrations</h4>
            <ul>
                <li><strong>Optimized:</strong> Native SDK integrations (Lambda, Batch, ECS, SNS, SQS, Glue, etc.)</li>
                <li><strong>AWS SDK:</strong> Call any AWS API (200+ services)</li>
                <li><strong>Activity Tasks:</strong> Poll-based for external workers</li>
            </ul>

            <h4>Error Handling</h4>
            <ul>
                <li><strong>Retry:</strong> Exponential backoff, max attempts</li>
                <li><strong>Catch:</strong> Transition to another state on error</li>
                <li><strong>Timeouts:</strong> HeartbeatSeconds, TimeoutSeconds</li>
                <li>Built-in error codes (States.ALL, States.Timeout)</li>
            </ul>

            <h4>Advanced Features</h4>
            <ul>
                <li><strong>Nested Workflows:</strong> Start other state machines</li>
                <li><strong>Callbacks:</strong> Wait for external processes (.waitForTaskToken)</li>
                <li><strong>Dynamic Parallelism:</strong> Map state for dynamic iteration</li>
                <li><strong>Step Functions Local:</strong> Test locally</li>
            </ul>

            <h4>Use Cases</h4>
            <ul>
                <li>ETL orchestration</li>
                <li>Microservices orchestration</li>
                <li>Machine learning pipelines</li>
                <li>Human approval workflows</li>
                <li>IT automation</li>
                <li>Order processing</li>
            </ul>

            <h4>Best Practices</h4>
            <ul>
                <li>Use Express workflows for high-volume event processing</li>
                <li>Implement idempotency in tasks</li>
                <li>Use input/output filtering to reduce state data</li>
                <li>Monitor with CloudWatch and X-Ray</li>
                <li>Version state machines with aliases</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/step-functions/',
            'https://aws.amazon.com/step-functions/'
        ]
    },
    {
        domain: 'new-solutions',
        title: 'Amazon EventBridge',
        summary: 'Serverless event bus for building event-driven applications at scale.',
        content: `
            <h4>EventBridge Overview</h4>
            <p>Amazon EventBridge (formerly CloudWatch Events) is a serverless event bus service for connecting applications using events from AWS services, SaaS applications, and custom sources.</p>

            <h4>Key Concepts</h4>
            <ul>
                <li><strong>Events:</strong> JSON objects representing state changes</li>
                <li><strong>Event Bus:</strong> Receives events (default, custom, partner)</li>
                <li><strong>Rules:</strong> Match events and route to targets</li>
                <li><strong>Targets:</strong> AWS services that process events (Lambda, SQS, SNS, Step Functions, etc.)</li>
            </ul>

            <h4>Event Sources</h4>
            <ul>
                <li><strong>AWS Services:</strong> 90+ services emit events (EC2, S3, RDS, etc.)</li>
                <li><strong>Custom Applications:</strong> PutEvents API</li>
                <li><strong>SaaS Partners:</strong> Zendesk, Datadog, Shopify, etc.</li>
                <li><strong>Scheduled:</strong> Cron or rate expressions</li>
            </ul>

            <h4>Event Pattern Matching</h4>
            <ul>
                <li>Filter events using JSON pattern matching</li>
                <li>Match on event source, detail type, specific fields</li>
                <li>Supports prefix matching, numeric operators, IP address matching</li>
                <li>Multiple rules can match same event</li>
            </ul>

            <h4>Schema Registry</h4>
            <ul>
                <li>Discover and version schemas for events</li>
                <li>Auto-generate code bindings for events</li>
                <li>OpenAPI support</li>
                <li>Schema versioning</li>
            </ul>

            <h4>Event Bus Types</h4>
            <ul>
                <li><strong>Default:</strong> AWS service events</li>
                <li><strong>Custom:</strong> Your application events</li>
                <li><strong>Partner:</strong> SaaS provider events</li>
                <li>Cross-account event delivery with resource policies</li>
            </ul>

            <h4>EventBridge Pipes</h4>
            <ul>
                <li>Point-to-point integration (no rules needed)</li>
                <li>Source → Optional filtering/enrichment → Target</li>
                <li>Sources: DynamoDB Streams, Kinesis, SQS, MSK</li>
                <li>Built-in transformation and enrichment</li>
            </ul>

            <h4>EventBridge Scheduler</h4>
            <ul>
                <li>Serverless scheduler for one-time or recurring tasks</li>
                <li>More scalable than CloudWatch Events (10M schedules)</li>
                <li>Flexible time windows</li>
                <li>Multiple targets per schedule</li>
            </ul>

            <h4>Use Cases</h4>
            <ul>
                <li>Decoupled microservices</li>
                <li>Event-driven data processing</li>
                <li>Security automation (respond to GuardDuty findings)</li>
                <li>Application integration</li>
                <li>Scheduled tasks</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/eventbridge/',
            'https://aws.amazon.com/eventbridge/'
        ]
    },
    {
        domain: 'new-solutions',
        title: 'AWS App Runner',
        summary: 'Fully managed service for deploying containerized web applications and APIs quickly.',
        content: `
            <h4>App Runner Overview</h4>
            <p>AWS App Runner is a fully managed service that makes it easy to quickly deploy containerized web applications and APIs at scale without managing infrastructure.</p>

            <h4>Key Features</h4>
            <ul>
                <li>No infrastructure management required</li>
                <li>Automatic scaling based on traffic</li>
                <li>Built-in load balancing</li>
                <li>HTTPS by default with automatic certificate management</li>
                <li>Integrated with VPC for private resource access</li>
            </ul>

            <h4>Source Options</h4>
            <ul>
                <li><strong>Source Code:</strong> Python, Node.js from GitHub (automatic builds)</li>
                <li><strong>Container Image:</strong> ECR public/private repositories</li>
                <li>Automatic deployments on code/image changes</li>
            </ul>

            <h4>Scaling</h4>
            <ul>
                <li><strong>Auto Scaling:</strong> Based on concurrent requests or CPU</li>
                <li><strong>Min/Max Instances:</strong> Define capacity range</li>
                <li>Scale to zero not supported (min 1 instance)</li>
                <li>Fast scale-up for traffic spikes</li>
            </ul>

            <h4>Networking</h4>
            <ul>
                <li><strong>Default:</strong> Public endpoint, no VPC access</li>
                <li><strong>VPC Connector:</strong> Access RDS, ElastiCache, other private resources</li>
                <li>Egress only (App Runner to VPC)</li>
            </ul>

            <h4>Configuration</h4>
            <ul>
                <li>Environment variables for configuration</li>
                <li>Secrets Manager integration</li>
                <li>Health checks (path, interval, timeout)</li>
                <li>CPU and memory configuration</li>
            </ul>

            <h4>When to Use App Runner</h4>
            <ul>
                <li><strong>Use App Runner for:</strong> Simple web apps/APIs, minimal config, quick deployment</li>
                <li><strong>Use ECS/EKS for:</strong> Complex microservices, advanced networking, more control</li>
                <li><strong>Use Lambda for:</strong> Event-driven, short-lived functions, pay-per-invocation</li>
            </ul>

            <h4>Best Practices</h4>
            <ul>
                <li>Use ECR private for production images</li>
                <li>Implement health check endpoints</li>
                <li>Configure auto-scaling thresholds appropriately</li>
                <li>Use VPC connector for private resource access</li>
                <li>Monitor with CloudWatch</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/apprunner/',
            'https://aws.amazon.com/apprunner/'
        ]
    },
    {
        domain: 'new-solutions',
        title: 'Amazon S3 Advanced Features',
        summary: 'Deep dive into S3 storage classes, lifecycle policies, and advanced features for SA Pro exam.',
        content: `
            <h4>Storage Classes</h4>
            <ul>
                <li><strong>S3 Standard:</strong> Frequent access, low latency, 11 9s durability, 4 9s availability</li>
                <li><strong>S3 Intelligent-Tiering:</strong> Auto-moves between tiers based on access patterns</li>
                <li><strong>S3 Standard-IA:</strong> Infrequent access, lower cost, retrieval fee</li>
                <li><strong>S3 One Zone-IA:</strong> Single AZ, 20% cheaper than Standard-IA</li>
                <li><strong>S3 Glacier Instant Retrieval:</strong> Archive, millisecond retrieval, 90-day minimum</li>
                <li><strong>S3 Glacier Flexible Retrieval:</strong> Archive, minutes-hours retrieval, 90-day minimum</li>
                <li><strong>S3 Glacier Deep Archive:</strong> Lowest cost, 12-hour retrieval, 180-day minimum</li>
            </ul>

            <h4>Lifecycle Policies</h4>
            <ul>
                <li>Transition actions (move to cheaper storage class)</li>
                <li>Expiration actions (delete objects)</li>
                <li>Rules based on prefix, tags, object size</li>
                <li>Minimum days in storage class before transition</li>
            </ul>

            <h4>Versioning and MFA Delete</h4>
            <ul>
                <li>Protect against accidental deletion</li>
                <li>MFA Delete requires MFA for version deletion</li>
                <li>Can only be enabled/disabled by root account</li>
                <li>Lifecycle policies work with versions</li>
            </ul>

            <h4>Replication</h4>
            <ul>
                <li><strong>CRR (Cross-Region):</strong> Compliance, lower latency, replication across accounts</li>
                <li><strong>SRR (Same-Region):</strong> Log aggregation, prod/dev sync</li>
                <li>Versioning must be enabled</li>
                <li>Batch replication for existing objects</li>
                <li>Replication Time Control (RTC) for guaranteed 15-minute replication</li>
            </ul>

            <h4>S3 Event Notifications</h4>
            <ul>
                <li>Trigger: SNS, SQS, Lambda on object events</li>
                <li>Events: Created, Deleted, Restored, Replication</li>
                <li>EventBridge: Advanced filtering and more targets</li>
            </ul>

            <h4>Performance Optimization</h4>
            <ul>
                <li><strong>Multipart Upload:</strong> Files > 100MB, parallel uploads</li>
                <li><strong>S3 Transfer Acceleration:</strong> Upload via CloudFront edge locations</li>
                <li><strong>Byte-Range Fetches:</strong> Parallel downloads, partial retrieval</li>
                <li><strong>Request Rate:</strong> 3,500 PUT/COPY/POST/DELETE, 5,500 GET/HEAD per prefix per second</li>
            </ul>

            <h4>S3 Object Lock & Glacier Vault Lock</h4>
            <ul>
                <li><strong>Governance Mode:</strong> Users with special permissions can modify</li>
                <li><strong>Compliance Mode:</strong> No one can modify (even root), for regulatory compliance</li>
                <li>Legal Hold: Indefinite retention</li>
                <li>Glacier Vault Lock: Write-once-read-many (WORM)</li>
            </ul>

            <h4>Security Features</h4>
            <ul>
                <li><strong>Access Control:</strong> IAM policies, bucket policies, ACLs (legacy)</li>
                <li><strong>Block Public Access:</strong> Account/bucket level settings</li>
                <li><strong>Pre-signed URLs:</strong> Temporary access with expiration</li>
                <li><strong>S3 Access Points:</strong> Simplified access management for shared datasets</li>
                <li><strong>S3 Object Lambda:</strong> Transform data during retrieval</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/s3/',
            'https://aws.amazon.com/s3/storage-classes/'
        ]
    },
    {
        domain: 'new-solutions',
        title: 'Amazon EFS and FSx',
        summary: 'Fully managed file systems for different use cases - EFS for Linux, FSx for Windows and high-performance computing.',
        content: `
            <h4>Amazon EFS (Elastic File System)</h4>
            <p>Scalable, elastic, cloud-native NFS file system for Linux workloads.</p>

            <h4>EFS Features</h4>
            <ul>
                <li>Shared file system (multi-AZ, concurrent access)</li>
                <li>Automatic scaling (pay for what you use)</li>
                <li>NFS v4.1 protocol</li>
                <li>Compatible with EC2, ECS, EKS, Lambda</li>
                <li>Regional service (data stored across multiple AZs)</li>
            </ul>

            <h4>EFS Performance Modes</h4>
            <ul>
                <li><strong>General Purpose:</strong> Latency-sensitive (web serving, CMS)</li>
                <li><strong>Max I/O:</strong> Higher aggregate throughput and IOPS (big data, media processing)</li>
            </ul>

            <h4>EFS Throughput Modes</h4>
            <ul>
                <li><strong>Bursting:</strong> Throughput scales with file system size</li>
                <li><strong>Provisioned:</strong> Fixed throughput regardless of size</li>
                <li><strong>Elastic:</strong> Auto-scales up/down based on workload</li>
            </ul>

            <h4>EFS Storage Classes</h4>
            <ul>
                <li><strong>Standard:</strong> Frequently accessed files</li>
                <li><strong>Infrequent Access (IA):</strong> 92% lower cost, retrieval fee</li>
                <li>Lifecycle management (move to IA after 7, 14, 30, 60, 90 days)</li>
            </ul>

            <h4>Amazon FSx for Windows File Server</h4>
            <ul>
                <li>Fully managed Windows native file system</li>
                <li>SMB protocol, NTFS</li>
                <li>Active Directory integration</li>
                <li>Multi-AZ for HA</li>
                <li>DFS namespaces for multi-file-system access</li>
            </ul>

            <h4>Amazon FSx for Lustre</h4>
            <ul>
                <li>High-performance file system for compute-intensive workloads</li>
                <li>Machine learning, HPC, video processing, financial modeling</li>
                <li>Integrates with S3 (read/write)</li>
                <li>Sub-millisecond latencies, 100s GB/s throughput</li>
                <li><strong>Deployment:</strong> Scratch (temporary, 6x faster) or Persistent (long-term, HA)</li>
            </ul>

            <h4>Amazon FSx for NetApp ONTAP</h4>
            <ul>
                <li>Fully managed NetApp ONTAP on AWS</li>
                <li>NFS, SMB, iSCSI protocols</li>
                <li>Point-in-time clones, replication</li>
                <li>Compression and deduplication</li>
            </ul>

            <h4>Amazon FSx for OpenZFS</h4>
            <ul>
                <li>Fully managed OpenZFS file system</li>
                <li>NFS protocol</li>
                <li>Up to 1 million IOPS</li>
                <li>Point-in-time snapshots</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/efs/',
            'https://aws.amazon.com/fsx/'
        ]
    },
    {
        domain: 'new-solutions',
        title: 'AWS Storage Gateway',
        summary: 'Hybrid cloud storage service for connecting on-premises applications to AWS storage.',
        content: `
            <h4>Storage Gateway Overview</h4>
            <p>Bridge between on-premises environments and AWS cloud storage, providing seamless and secure integration.</p>

            <h4>File Gateway</h4>
            <ul>
                <li>NFS or SMB interface to S3</li>
                <li>Files stored as S3 objects</li>
                <li>Local cache for frequently accessed data</li>
                <li>Use case: NFS/SMB file share backed by S3, tiering to cloud</li>
            </ul>

            <h4>FSx File Gateway</h4>
            <ul>
                <li>Native access to FSx for Windows File Server</li>
                <li>Local cache for low-latency access</li>
                <li>Windows-native file system features</li>
                <li>Use case: Extend on-premises file shares to AWS</li>
            </ul>

            <h4>Volume Gateway</h4>
            <ul>
                <li>iSCSI block storage backed by S3</li>
                <li><strong>Cached Volumes:</strong> Primary data in S3, cache on-premises (low latency for recent data)</li>
                <li><strong>Stored Volumes:</strong> Primary data on-premises, async backup to S3</li>
                <li>Use case: Block storage with cloud backup</li>
            </ul>

            <h4>Tape Gateway (VTL)</h4>
            <ul>
                <li>Virtual tape library backed by S3 and Glacier</li>
                <li>Compatible with backup software (Veeam, NetBackup, Backup Exec)</li>
                <li>Cost-effective replacement for physical tapes</li>
                <li>Use case: Backup and archival with existing software</li>
            </ul>

            <h4>Deployment Options</h4>
            <ul>
                <li><strong>VM:</strong> VMware, Hyper-V, Linux KVM</li>
                <li><strong>Hardware Appliance:</strong> Physical device from AWS</li>
                <li><strong>EC2:</strong> Run gateway as EC2 instance</li>
            </ul>

            <h4>Best Practices</h4>
            <ul>
                <li>Size local cache based on working set</li>
                <li>Use sufficient bandwidth for cloud connectivity</li>
                <li>Enable CloudWatch metrics for monitoring</li>
                <li>Implement lifecycle policies on S3 backend</li>
                <li>Use multiple gateways for HA</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/storagegateway/',
            'https://aws.amazon.com/storagegateway/'
        ]
    },
    {
        domain: 'new-solutions',
        title: 'Amazon VPC Advanced Networking',
        summary: 'Deep dive into VPC design, subnets, routing, and advanced networking features.',
        content: `
            <h4>VPC Components</h4>
            <ul>
                <li><strong>CIDR Blocks:</strong> Primary + secondary (up to 5), /16 to /28</li>
                <li><strong>Subnets:</strong> Public (internet gateway route), Private (no direct internet)</li>
                <li><strong>Route Tables:</strong> Control traffic routing, one per subnet</li>
                <li><strong>Internet Gateway:</strong> Horizontally scaled, redundant, HA</li>
                <li><strong>NAT Gateway:</strong> Outbound internet for private subnets, AZ-specific</li>
            </ul>

            <h4>NAT Gateway vs NAT Instance</h4>
            <ul>
                <li><strong>NAT Gateway:</strong> Managed, HA within AZ, 45 Gbps, pay per hour + data</li>
                <li><strong>NAT Instance:</strong> Self-managed EC2, can be bastion host, lower cost for small traffic</li>
            </ul>

            <h4>VPC Peering</h4>
            <ul>
                <li>Private connection between 2 VPCs (same/different account/region)</li>
                <li>Non-transitive (A-B, B-C doesn't mean A-C)</li>
                <li>No overlapping CIDR blocks</li>
                <li>Route tables must be updated</li>
            </ul>

            <h4>VPC Endpoints</h4>
            <ul>
                <li><strong>Gateway Endpoints:</strong> S3, DynamoDB (free, uses route table)</li>
                <li><strong>Interface Endpoints:</strong> All other services (PrivateLink, ENI with private IP, $0.01/hour)</li>
                <li>Removes need for NAT/IGW for AWS service access</li>
                <li>Reduces data transfer costs</li>
            </ul>

            <h4>Security</h4>
            <ul>
                <li><strong>Security Groups:</strong> Stateful, instance level, allow rules only</li>
                <li><strong>Network ACLs:</strong> Stateless, subnet level, allow/deny rules, numbered rules</li>
                <li><strong>Flow Logs:</strong> Capture IP traffic (VPC/Subnet/ENI level), to CloudWatch or S3</li>
            </ul>

            <h4>VPC Sharing (AWS RAM)</h4>
            <ul>
                <li>Share subnets with other accounts in same Organization</li>
                <li>Owner manages VPC/subnets, participants create resources</li>
                <li>Reduces VPC sprawl, centralized networking</li>
            </ul>

            <h4>IPv6 Support</h4>
            <ul>
                <li>All IPv6 addresses are public</li>
                <li>Dual-stack mode (IPv4 + IPv6)</li>
                <li>Egress-only internet gateway for IPv6</li>
            </ul>

            <h4>Best Practices</h4>
            <ul>
                <li>Plan CIDR blocks carefully (avoid overlap)</li>
                <li>Use VPC endpoints to reduce costs and improve security</li>
                <li>Implement defense in depth (Security Groups + NACLs)</li>
                <li>Enable VPC Flow Logs for security analysis</li>
                <li>Use multiple AZs for high availability</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/vpc/',
            'https://aws.amazon.com/vpc/'
        ]
    },
    {
        domain: 'new-solutions',
        title: 'AWS Transit Gateway',
        summary: 'Centralized network hub for connecting VPCs and on-premises networks at scale.',
        content: `
            <h4>Transit Gateway Overview</h4>
            <p>Acts as a cloud router - connects thousands of VPCs and on-premises networks through a single gateway.</p>

            <h4>Key Benefits</h4>
            <ul>
                <li>Hub-and-spoke topology (simplifies network architecture)</li>
                <li>Replaces complex VPC peering meshes</li>
                <li>Centralized routing and management</li>
                <li>Regional service with cross-region peering</li>
                <li>Up to 5000 attachments per gateway</li>
            </ul>

            <h4>Attachments</h4>
            <ul>
                <li><strong>VPC:</strong> Connect VPCs in same region</li>
                <li><strong>VPN:</strong> Site-to-Site VPN connections</li>
                <li><strong>Direct Connect Gateway:</strong> On-premises via DX</li>
                <li><strong>Peering:</strong> Cross-region Transit Gateway peering</li>
                <li><strong>Connect:</strong> SD-WAN appliances</li>
            </ul>

            <h4>Route Tables</h4>
            <ul>
                <li>Multiple route tables per Transit Gateway</li>
                <li>Control traffic flow between attachments</li>
                <li>Use for: isolation, segmentation, network segregation</li>
                <li>Example: Prod and Dev traffic separation</li>
            </ul>

            <h4>Advanced Features</h4>
            <ul>
                <li><strong>Multicast:</strong> One-to-many traffic distribution</li>
                <li><strong>ECMP:</strong> Equal-cost multi-path for VPN (aggregate bandwidth)</li>
                <li><strong>Appliance Mode:</strong> For stateful inspection appliances</li>
                <li><strong>Resource Sharing:</strong> Share TGW with AWS RAM</li>
            </ul>

            <h4>Security</h4>
            <ul>
                <li>Traffic between attachments stays on AWS network</li>
                <li>Integration with Network Firewall</li>
                <li>VPC Flow Logs for traffic analysis</li>
                <li>Route table isolation</li>
            </ul>

            <h4>Use Cases</h4>
            <ul>
                <li>Centralized network hub (hub-and-spoke)</li>
                <li>Multi-VPC connectivity</li>
                <li>Hybrid cloud (on-premises + AWS)</li>
                <li>Network segmentation (prod/dev isolation)</li>
                <li>Centralized egress/ingress (inspection VPC pattern)</li>
            </ul>

            <h4>Best Practices</h4>
            <ul>
                <li>Use separate route tables for environment isolation</li>
                <li>Implement inspection VPC for centralized security</li>
                <li>Leverage ECMP for VPN bandwidth aggregation</li>
                <li>Monitor with CloudWatch and VPC Flow Logs</li>
                <li>Share Transit Gateway across accounts with RAM</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/transit-gateway/',
            'https://aws.amazon.com/transit-gateway/'
        ]
    },
    {
        domain: 'new-solutions',
        title: 'AWS Direct Connect',
        summary: 'Dedicated network connection from on-premises to AWS for consistent performance and reduced costs.',
        content: `
            <h4>Direct Connect Overview</h4>
            <p>Establishes a dedicated private connection between your data center and AWS, bypassing the internet.</p>

            <h4>Connection Types</h4>
            <ul>
                <li><strong>Dedicated Connection:</strong> 1 Gbps, 10 Gbps, 100 Gbps physical ethernet port</li>
                <li><strong>Hosted Connection:</strong> 50 Mbps to 10 Gbps via AWS partner</li>
                <li>Takes weeks to establish (provisioning time)</li>
            </ul>

            <h4>Virtual Interfaces (VIF)</h4>
            <ul>
                <li><strong>Private VIF:</strong> Connect to VPC private resources (EC2, RDS)</li>
                <li><strong>Public VIF:</strong> Connect to AWS public services (S3, DynamoDB) without internet</li>
                <li><strong>Transit VIF:</strong> Connect to Transit Gateway (multiple VPCs)</li>
            </ul>

            <h4>Direct Connect Gateway</h4>
            <ul>
                <li>Connect to multiple VPCs in different regions (but same account)</li>
                <li>Does not support transitive routing</li>
                <li>Alternative to VPN for hybrid cloud</li>
            </ul>

            <h4>High Availability</h4>
            <ul>
                <li><strong>Single DX:</strong> Single point of failure</li>
                <li><strong>High Resiliency:</strong> 2 DX connections to 2 locations</li>
                <li><strong>Maximum Resiliency:</strong> Separate connections terminating on separate devices at 2+ locations</li>
                <li>Use VPN as backup for DX</li>
            </ul>

            <h4>Encryption</h4>
            <ul>
                <li>DX itself is NOT encrypted</li>
                <li><strong>Option 1:</strong> VPN over DX public VIF (IPsec encryption)</li>
                <li><strong>Option 2:</strong> MACsec encryption (10/100 Gbps only)</li>
            </ul>

            <h4>Benefits</h4>
            <ul>
                <li>Reduced bandwidth costs (cheaper than internet)</li>
                <li>Consistent network performance (not internet-dependent)</li>
                <li>Hybrid cloud architectures</li>
                <li>Meet regulatory requirements (private connection)</li>
            </ul>

            <h4>Use Cases</h4>
            <ul>
                <li>Hybrid cloud with large data transfers</li>
                <li>Real-time data feeds (trading, gaming)</li>
                <li>Backup and disaster recovery</li>
                <li>Working with large datasets</li>
            </ul>

            <h4>Direct Connect + VPN</h4>
            <ul>
                <li>VPN over DX public VIF for encryption</li>
                <li>VPN as backup for DX (failover)</li>
                <li>Best practice for production workloads</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/directconnect/',
            'https://aws.amazon.com/directconnect/'
        ]
    },
    {
        domain: 'new-solutions',
        title: 'Amazon Route 53',
        summary: 'Scalable DNS and domain registration service with health checking and routing policies.',
        content: `
            <h4>Route 53 Overview</h4>
            <p>Highly available and scalable DNS web service with domain registration and health checking.</p>

            <h4>Record Types</h4>
            <ul>
                <li><strong>A:</strong> IPv4 address</li>
                <li><strong>AAAA:</strong> IPv6 address</li>
                <li><strong>CNAME:</strong> Alias to another domain (not for zone apex)</li>
                <li><strong>Alias:</strong> AWS-specific, free, works with zone apex, automatic health checks</li>
                <li><strong>MX, TXT, NS, SOA, PTR, SRV, SPF:</strong> Other standard DNS records</li>
            </ul>

            <h4>Routing Policies</h4>
            <ul>
                <li><strong>Simple:</strong> Single resource, no health checks</li>
                <li><strong>Weighted:</strong> Route traffic based on weights (A/B testing, blue/green)</li>
                <li><strong>Latency:</strong> Route to region with lowest latency</li>
                <li><strong>Failover:</strong> Active-passive setup with health checks</li>
                <li><strong>Geolocation:</strong> Route based on user's location (content localization, restrictions)</li>
                <li><strong>Geoproximity:</strong> Route based on geographic location with bias</li>
                <li><strong>Multi-Value Answer:</strong> Return multiple IPs with health checks (client-side load balancing)</li>
            </ul>

            <h4>Health Checks</h4>
            <ul>
                <li>Monitor endpoint (HTTP, HTTPS, TCP)</li>
                <li>Monitor other health checks (calculated health check)</li>
                <li>Monitor CloudWatch alarms</li>
                <li>String matching on response</li>
                <li>Integration with CloudWatch alarms and SNS</li>
            </ul>

            <h4>Traffic Flow</h4>
            <ul>
                <li>Visual editor for complex routing configurations</li>
                <li>Version control for routing policies</li>
                <li>Combine multiple routing policies</li>
            </ul>

            <h4>Route 53 Resolver</h4>
            <ul>
                <li>Hybrid DNS resolution (AWS ↔ on-premises)</li>
                <li><strong>Inbound Endpoints:</strong> On-premises to AWS resolution</li>
                <li><strong>Outbound Endpoints:</strong> AWS to on-premises resolution</li>
                <li>Resolver rules for conditional forwarding</li>
            </ul>

            <h4>Private Hosted Zones</h4>
            <ul>
                <li>DNS for resources within VPC</li>
                <li>Not accessible from internet</li>
                <li>Can be associated with multiple VPCs</li>
            </ul>

            <h4>Best Practices</h4>
            <ul>
                <li>Use Alias records for AWS resources (free, better performance)</li>
                <li>Implement health checks for high availability</li>
                <li>Use weighted routing for gradual deployments</li>
                <li>Enable query logging for troubleshooting</li>
                <li>Use Traffic Flow for complex routing logic</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/route53/',
            'https://aws.amazon.com/route53/'
        ]
    },
    {
        domain: 'new-solutions',
        title: 'Amazon CloudFront and AWS Global Accelerator',
        summary: 'Content delivery and global application acceleration services for improved performance and availability.',
        content: `
            <h4>Amazon CloudFront</h4>
            <p>Content Delivery Network (CDN) that caches content at edge locations worldwide for low latency.</p>

            <h4>CloudFront Key Concepts</h4>
            <ul>
                <li><strong>Edge Locations:</strong> 400+ locations worldwide</li>
                <li><strong>Origin:</strong> S3, EC2, ELB, HTTP server, MediaPackage</li>
                <li><strong>Distribution:</strong> CloudFront configuration</li>
                <li><strong>Cache Behaviors:</strong> Path patterns with routing rules</li>
            </ul>

            <h4>CloudFront Features</h4>
            <ul>
                <li><strong>Security:</strong> AWS Shield Standard (DDoS), WAF integration, SSL/TLS, signed URLs/cookies</li>
                <li><strong>Geo Restriction:</strong> Whitelist/blacklist countries</li>
                <li><strong>Origin Failover:</strong> Primary/secondary origin groups</li>
                <li><strong>Field-Level Encryption:</strong> Encrypt sensitive data at edge</li>
                <li><strong>Lambda@Edge:</strong> Run code at edge locations</li>
            </ul>

            <h4>CloudFront vs S3 Cross-Region Replication</h4>
            <ul>
                <li><strong>CloudFront:</strong> Global edge network, cached for TTL, static content</li>
                <li><strong>S3 CRR:</strong> Must setup per region, near real-time, dynamic content, low-latency in specific regions</li>
            </ul>

            <h4>Caching Strategies</h4>
            <ul>
                <li>TTL (Time to Live) - default 24 hours</li>
                <li>Cache based on headers, cookies, query strings</li>
                <li>Invalidate cache manually (costs money)</li>
                <li>Cache behaviors for different path patterns</li>
            </ul>

            <h4>AWS Global Accelerator</h4>
            <p>Network layer service that directs traffic to optimal endpoints over AWS global network.</p>

            <h4>Global Accelerator Key Concepts</h4>
            <ul>
                <li>2 static Anycast IPs (fixed entry point)</li>
                <li>Uses AWS internal network (not internet)</li>
                <li>Health checks and automatic failover</li>
                <li>DDoS protection (AWS Shield)</li>
            </ul>

            <h4>Global Accelerator vs CloudFront</h4>
            <ul>
                <li><strong>CloudFront:</strong> Cacheable content (images, videos), HTTP/HTTPS only</li>
                <li><strong>Global Accelerator:</strong> Non-HTTP (TCP/UDP), dynamic content, gaming, IoT, VoIP, low latency requirements</li>
            </ul>

            <h4>Use Cases</h4>
            <ul>
                <li><strong>CloudFront:</strong> Website acceleration, video streaming, software distribution, API acceleration</li>
                <li><strong>Global Accelerator:</strong> Gaming, IoT, VoIP, financial applications, healthcare applications</li>
            </ul>

            <h4>Best Practices</h4>
            <ul>
                <li>Use CloudFront for static content and cacheable APIs</li>
                <li>Use Global Accelerator for TCP/UDP and dynamic apps</li>
                <li>Enable compression in CloudFront</li>
                <li>Use Origin Shield for additional caching layer</li>
                <li>Monitor with CloudWatch and Real-Time Logs</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/cloudfront/',
            'https://aws.amazon.com/global-accelerator/'
        ]
    },
    {
        domain: 'new-solutions',
        title: 'Amazon API Gateway',
        summary: 'Fully managed service for creating, deploying, and managing APIs at any scale.',
        content: `
            <h4>API Gateway Overview</h4>
            <p>Create RESTful APIs, HTTP APIs, and WebSocket APIs that act as front door for applications to access backend services.</p>

            <h4>API Types</h4>
            <ul>
                <li><strong>REST API:</strong> Full-featured, API keys, usage plans, request/response transformation</li>
                <li><strong>HTTP API:</strong> Lower cost (70% cheaper), lower latency, simpler, OAuth 2.0/OIDC, CORS</li>
                <li><strong>WebSocket API:</strong> Two-way communication, real-time applications (chat, gaming)</li>
            </ul>

            <h4>Integration Types</h4>
            <ul>
                <li><strong>Lambda:</strong> Invoke Lambda functions (serverless backend)</li>
                <li><strong>HTTP:</strong> HTTP endpoints (on-premises, other cloud)</li>
                <li><strong>AWS Service:</strong> Direct integration (Step Functions, SQS, S3, DynamoDB)</li>
                <li><strong>Mock:</strong> Return response without backend (testing)</li>
                <li><strong>VPC Link:</strong> Private integration with ALB/NLB in VPC</li>
            </ul>

            <h4>Deployment Stages</h4>
            <ul>
                <li>Stages: dev, test, prod</li>
                <li>Each stage has own configuration, throttling, caching</li>
                <li>Stage variables for environment-specific config</li>
                <li>Canary deployments for gradual rollout</li>
            </ul>

            <h4>Security</h4>
            <ul>
                <li><strong>IAM:</strong> Sig v4 for AWS resources</li>
                <li><strong>Lambda Authorizer:</strong> Custom authorization with Lambda</li>
                <li><strong>Cognito User Pools:</strong> User authentication</li>
                <li><strong>API Keys:</strong> Usage plans and quotas</li>
                <li><strong>Resource Policies:</strong> Control API access</li>
                <li><strong>WAF:</strong> Protection against common web exploits</li>
            </ul>

            <h4>Caching</h4>
            <ul>
                <li>Cache at stage level (0.5 GB to 237 GB)</li>
                <li>TTL: 0 to 3600 seconds (default 300)</li>
                <li>Per-method cache settings</li>
                <li>Cache encryption</li>
                <li>Invalidate entire cache</li>
            </ul>

            <h4>Throttling and Usage Plans</h4>
            <ul>
                <li>Account limit: 10,000 RPS, burst 5000</li>
                <li>Stage/method level throttling</li>
                <li>Usage plans: throttle rate, quota per day/week/month</li>
                <li>API keys for client identification</li>
            </ul>

            <h4>Best Practices</h4>
            <ul>
                <li>Use HTTP API for simpler, cost-effective APIs</li>
                <li>Enable caching for frequently accessed data</li>
                <li>Implement Lambda authorizers for complex auth</li>
                <li>Use CloudWatch Logs for debugging</li>
                <li>Enable X-Ray for distributed tracing</li>
                <li>Use canary deployments for safe releases</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/apigateway/',
            'https://aws.amazon.com/api-gateway/'
        ]
    },
    {
        domain: 'new-solutions',
        title: 'Amazon SQS, SNS, and Amazon MQ',
        summary: 'Message queuing and pub/sub services for decoupling and scaling microservices.',
        content: `
            <h4>Amazon SQS (Simple Queue Service)</h4>
            <p>Fully managed message queuing service for decoupling and scaling applications.</p>

            <h4>SQS Queue Types</h4>
            <ul>
                <li><strong>Standard Queue:</strong> Unlimited throughput, at-least-once delivery, best-effort ordering</li>
                <li><strong>FIFO Queue:</strong> 300 TPS (3000 with batching), exactly-once processing, strict ordering</li>
            </ul>

            <h4>SQS Features</h4>
            <ul>
                <li><strong>Visibility Timeout:</strong> 0 to 12 hours (default 30s), message invisible during processing</li>
                <li><strong>Message Retention:</strong> 1 minute to 14 days (default 4 days)</li>
                <li><strong>Dead Letter Queue:</strong> Failed messages after max receives</li>
                <li><strong>Long Polling:</strong> Wait for messages (reduces empty receives, lower cost)</li>
                <li><strong>Delay Queues:</strong> Postpone delivery up to 15 minutes</li>
                <li>Max message size: 256 KB (use S3 for larger)</li>
            </ul>

            <h4>Amazon SNS (Simple Notification Service)</h4>
            <p>Fully managed pub/sub messaging service for application-to-application and application-to-person communication.</p>

            <h4>SNS Key Concepts</h4>
            <ul>
                <li><strong>Topics:</strong> Communication channels</li>
                <li><strong>Subscribers:</strong> SQS, Lambda, HTTP/S, Email, SMS, Mobile Push</li>
                <li><strong>Publishers:</strong> AWS services or custom applications</li>
                <li><strong>Fan-out pattern:</strong> SNS → multiple SQS queues</li>
            </ul>

            <h4>SNS Features</h4>
            <ul>
                <li>Message filtering with subscription filter policies</li>
                <li>Message attributes for metadata</li>
                <li>FIFO topics (ordering within message group)</li>
                <li>Dead Letter Queue for failed deliveries</li>
                <li>Encryption at rest (KMS) and in transit (HTTPS)</li>
            </ul>

            <h4>SQS + SNS Fan-Out Pattern</h4>
            <ul>
                <li>Publish once to SNS, delivered to multiple SQS queues</li>
                <li>Each subscriber processes independently</li>
                <li>Use case: Parallel processing, multiple downstream systems</li>
            </ul>

            <h4>Amazon MQ</h4>
            <p>Managed message broker service for Apache ActiveMQ and RabbitMQ.</p>

            <h4>When to Use Amazon MQ</h4>
            <ul>
                <li>Migrating from on-premises message brokers</li>
                <li>Need for industry-standard protocols (AMQP, MQTT, OpenWire, STOMP)</li>
                <li>Existing applications using JMS API</li>
                <li><strong>Use SQS/SNS for:</strong> New cloud-native applications, AWS-native integration</li>
            </ul>

            <h4>Amazon MQ Features</h4>
            <ul>
                <li>Active/standby deployment for HA</li>
                <li>Network of brokers for throughput</li>
                <li>EBS storage or EFS for shared storage</li>
                <li>VPC deployment</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/sqs/',
            'https://docs.aws.amazon.com/sns/',
            'https://aws.amazon.com/amazon-mq/'
        ]
    },
    {
        domain: 'new-solutions',
        title: 'AWS Kinesis Family',
        summary: 'Real-time data streaming and analytics services for processing data at scale.',
        content: `
            <h4>AWS Kinesis Overview</h4>
            <p>Suite of services for real-time data streaming, processing, and analytics.</p>

            <h4>Kinesis Data Streams</h4>
            <ul>
                <li>Real-time data streaming service</li>
                <li><strong>Producers:</strong> Applications, IoT devices, clickstreams</li>
                <li><strong>Consumers:</strong> Lambda, Kinesis Data Analytics, EC2/ECS apps</li>
                <li><strong>Shards:</strong> 1 MB/s or 1000 records/s per shard (write), 2 MB/s per shard (read)</li>
                <li>Data retention: 1 to 365 days</li>
                <li>Ordering within shard (partition key)</li>
            </ul>

            <h4>Kinesis Data Streams Capacity Modes</h4>
            <ul>
                <li><strong>Provisioned:</strong> Specify shard count, predictable cost</li>
                <li><strong>On-Demand:</strong> Auto-scales, pay-per-GB, unpredictable workloads</li>
            </ul>

            <h4>Kinesis Data Firehose</h4>
            <ul>
                <li>Fully managed, load streaming data to destinations</li>
                <li><strong>Destinations:</strong> S3, Redshift, OpenSearch, Splunk, HTTP endpoints, Datadog, New Relic</li>
                <li>Near real-time (60s latency minimum)</li>
                <li>Auto-scaling, no shard management</li>
                <li>Data transformation with Lambda</li>
                <li>Compression (GZIP, Snappy, Zip)</li>
                <li>Pay for data volume</li>
            </ul>

            <h4>Kinesis Data Analytics</h4>
            <ul>
                <li>Real-time analytics using SQL or Apache Flink</li>
                <li>Sources: Kinesis Data Streams, Kinesis Data Firehose</li>
                <li>Reference data from S3</li>
                <li>Destinations: Kinesis Data Streams, Kinesis Data Firehose, Lambda</li>
                <li>Use cases: Real-time dashboards, metrics, anomaly detection</li>
            </ul>

            <h4>Kinesis Video Streams</h4>
            <ul>
                <li>Capture, process, and store video streams</li>
                <li>Use cases: Security cameras, body cams, AWS Panorama</li>
                <li>Integration with Rekognition Video for analysis</li>
            </ul>

            <h4>Kinesis vs SQS</h4>
            <ul>
                <li><strong>Kinesis:</strong> Real-time (< 1s), multiple consumers, replay data, ordering per shard, higher throughput</li>
                <li><strong>SQS:</strong> Decoupling, simpler, message deleted after consumption, no replay, FIFO or Standard</li>
            </ul>

            <h4>Best Practices</h4>
            <ul>
                <li>Use partition key for even distribution across shards</li>
                <li>Implement error handling and DLQ for failed records</li>
                <li>Use enhanced fan-out for low latency (70ms)</li>
                <li>Monitor with CloudWatch (IteratorAge, GetRecords.Success)</li>
                <li>Use Firehose for simple load-to-destination scenarios</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/kinesis/',
            'https://aws.amazon.com/kinesis/'
        ]
    },
    {
        domain: 'new-solutions',
        title: 'Amazon Redshift',
        summary: 'Fully managed petabyte-scale data warehouse for analytics and business intelligence.',
        content: `
            <h4>Redshift Overview</h4>
            <p>Fast, fully managed data warehouse for analyzing data using SQL and existing BI tools.</p>

            <h4>Architecture</h4>
            <ul>
                <li><strong>Leader Node:</strong> Query planning, result aggregation</li>
                <li><strong>Compute Nodes:</strong> Execute queries, store data (up to 128 nodes)</li>
                <li><strong>Slices:</strong> Partitions on compute nodes (parallel processing)</li>
                <li>Columnar storage for analytics</li>
            </ul>

            <h4>Node Types</h4>
            <ul>
                <li><strong>RA3:</strong> Managed storage, scale compute and storage independently</li>
                <li><strong>DC2:</strong> Dense compute, local SSD storage</li>
                <li><strong>DS2:</strong> Dense storage, HDD (deprecated, migrate to RA3)</li>
            </ul>

            <h4>Redshift Serverless</h4>
            <ul>
                <li>No infrastructure management</li>
                <li>Auto-scales compute capacity</li>
                <li>Pay for what you use (RPU-hours)</li>
                <li>Use for: variable workloads, dev/test, unpredictable usage</li>
            </ul>

            <h4>Performance Features</h4>
            <ul>
                <li><strong>Massively Parallel Processing (MPP):</strong> Distribute queries across nodes</li>
                <li><strong>Columnar Storage:</strong> Compress data, faster analytics</li>
                <li><strong>Result Caching:</strong> Cache query results</li>
                <li><strong>Distribution Styles:</strong> EVEN, KEY, ALL (optimize data distribution)</li>
                <li><strong>Sort Keys:</strong> Improve query performance (range filtering)</li>
            </ul>

            <h4>Loading Data</h4>
            <ul>
                <li><strong>COPY:</strong> Bulk load from S3, DynamoDB, EMR (fastest, parallel)</li>
                <li><strong>INSERT:</strong> Small batches, slower</li>
                <li><strong>Kinesis Data Firehose:</strong> Real-time streaming</li>
                <li><strong>AWS Glue:</strong> ETL jobs</li>
            </ul>

            <h4>Redshift Spectrum</h4>
            <ul>
                <li>Query data directly in S3 (no loading required)</li>
                <li>Separate compute for S3 queries (doesn't impact cluster)</li>
                <li>Support formats: Parquet, ORC, JSON, CSV</li>
                <li>Use case: Archive old data to S3, query hot+cold data together</li>
            </ul>

            <h4>High Availability</h4>
            <ul>
                <li>Automatic backups to S3 (1-35 days retention)</li>
                <li>Multi-AZ for RA3 clusters (preview)</li>
                <li>Snapshots (manual or automated)</li>
                <li>Cross-region snapshot copy for DR</li>
            </ul>

            <h4>Security</h4>
            <ul>
                <li>VPC isolation</li>
                <li>Encryption at rest (KMS or HSM)</li>
                <li>Encryption in transit (SSL)</li>
                <li>IAM, database users, or SAML/OIDC</li>
            </ul>

            <h4>Best Practices</h4>
            <ul>
                <li>Use COPY command for bulk loading</li>
                <li>Choose appropriate distribution and sort keys</li>
                <li>Use Redshift Spectrum for infrequently accessed data</li>
                <li>Implement workload management (WLM) queues</li>
                <li>Monitor with CloudWatch and query performance</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/redshift/',
            'https://aws.amazon.com/redshift/'
        ]
    },
    {
        domain: 'new-solutions',
        title: 'AWS Glue and Lake Formation',
        summary: 'Serverless ETL service and data lake management for preparing and cataloging data.',
        content: `
            <h4>AWS Glue Overview</h4>
            <p>Fully managed ETL service for preparing and transforming data for analytics.</p>

            <h4>Glue Components</h4>
            <ul>
                <li><strong>Glue Data Catalog:</strong> Central metadata repository</li>
                <li><strong>Glue Crawlers:</strong> Discover schema and populate catalog</li>
                <li><strong>Glue ETL Jobs:</strong> Transform data (Python or Scala)</li>
                <li><strong>Glue Triggers:</strong> Schedule or event-driven job execution</li>
            </ul>

            <h4>Glue Data Catalog</h4>
            <ul>
                <li>Persistent metadata store</li>
                <li>Table definitions, schemas, partitions</li>
                <li>Integration: Athena, Redshift Spectrum, EMR, QuickSight</li>
                <li>Hive Metastore compatible</li>
            </ul>

            <h4>Glue Crawlers</h4>
            <ul>
                <li>Auto-discover data schema</li>
                <li>Sources: S3, RDS, DynamoDB, JDBC databases</li>
                <li>Detect schema changes and partitions</li>
                <li>Schedule or on-demand execution</li>
            </ul>

            <h4>Glue ETL Jobs</h4>
            <ul>
                <li>Serverless Spark (Python or Scala)</li>
                <li>Built-in transformations (DropFields, Join, Map)</li>
                <li>DPU (Data Processing Units) for scaling</li>
                <li>Job bookmarks for incremental processing</li>
                <li>Development endpoints for testing</li>
            </ul>

            <h4>Glue DataBrew</h4>
            <ul>
                <li>Visual data preparation tool (no coding)</li>
                <li>250+ transformations</li>
                <li>Profile data for quality insights</li>
                <li>Use case: Data analysts, no-code ETL</li>
            </ul>

            <h4>AWS Lake Formation</h4>
            <p>Build, secure, and manage data lakes with centralized permissions and governance.</p>

            <h4>Lake Formation Features</h4>
            <ul>
                <li>Simplify data lake creation (days vs months)</li>
                <li><strong>Blueprints:</strong> Pre-built workflows for data ingestion</li>
                <li><strong>Central Security:</strong> Column, row, cell-level permissions</li>
                <li><strong>Data Catalog:</strong> Uses Glue Data Catalog</li>
                <li><strong>Governed Tables:</strong> ACID transactions on S3</li>
            </ul>

            <h4>Lake Formation Security</h4>
            <ul>
                <li>Centralized permissions (table, column, row level)</li>
                <li>Replace complex S3 bucket policies</li>
                <li>Integration with IAM, Data Catalog</li>
                <li>Cross-account access</li>
            </ul>

            <h4>Use Cases</h4>
            <ul>
                <li><strong>Glue:</strong> ETL, data cataloging, schema discovery</li>
                <li><strong>Lake Formation:</strong> Data lake governance, fine-grained access control, ACID transactions</li>
            </ul>

            <h4>Best Practices</h4>
            <ul>
                <li>Use crawlers to auto-discover schemas</li>
                <li>Partition data in S3 for better performance</li>
                <li>Enable job bookmarks for incremental processing</li>
                <li>Use Lake Formation for centralized security</li>
                <li>Monitor Glue jobs with CloudWatch</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/glue/',
            'https://aws.amazon.com/lake-formation/'
        ]
    },

    // Domain 3: Continuous Improvement (25%)
    {
        domain: 'improvement',
        title: 'Cost Optimization Strategies',
        summary: 'Techniques and services for reducing AWS costs while maintaining performance and availability.',
        content: `
            <h4>Compute Cost Optimization</h4>
            <ul>
                <li><strong>Reserved Instances:</strong> 1 or 3 year commitment, up to 75% savings</li>
                <li><strong>Savings Plans:</strong> Flexible commitment-based pricing (Compute or EC2)</li>
                <li><strong>Spot Instances:</strong> Up to 90% discount for interruptible workloads</li>
                <li><strong>Right-sizing:</strong> Use CloudWatch metrics to match instance types to workload</li>
                <li><strong>Auto Scaling:</strong> Scale compute capacity to match demand</li>
            </ul>

            <h4>Storage Cost Optimization</h4>
            <ul>
                <li><strong>S3 Lifecycle Policies:</strong> Transition objects to cheaper storage classes</li>
                <li><strong>S3 Intelligent-Tiering:</strong> Automatic cost optimization for unknown access patterns</li>
                <li><strong>EBS Volume Types:</strong> Use gp3 instead of gp2, delete unattached volumes</li>
                <li><strong>EFS Lifecycle Management:</strong> Move to Infrequent Access after 30 days</li>
                <li><strong>Glacier for Archival:</strong> Long-term backup and compliance data</li>
            </ul>

            <h4>AWS Cost Management Tools</h4>
            <ul>
                <li><strong>Cost Explorer:</strong> Visualize and analyze spending patterns</li>
                <li><strong>Budgets:</strong> Set custom alerts for cost and usage</li>
                <li><strong>Cost and Usage Reports:</strong> Detailed billing data in S3</li>
                <li><strong>Trusted Advisor:</strong> Best practice checks including cost optimization</li>
                <li><strong>Compute Optimizer:</strong> ML-powered recommendations for EC2, EBS, Lambda</li>
            </ul>

            <h4>Architectural Cost Optimizations</h4>
            <ul>
                <li>Use CloudFront to reduce data transfer costs</li>
                <li>Leverage S3 Transfer Acceleration for faster uploads</li>
                <li>Implement caching with ElastiCache or CloudFront</li>
                <li>Use NAT Gateway in single AZ for non-critical workloads</li>
                <li>Enable VPC endpoints to avoid data transfer charges</li>
            </ul>

            <h4>Tagging Strategy for Cost Allocation</h4>
            <ul>
                <li>Enforce tags with AWS Organizations tag policies</li>
                <li>Common tags: Environment, Project, CostCenter, Owner</li>
                <li>Use cost allocation tags in billing reports</li>
                <li>Automate tagging with AWS Config rules</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/cost-management/',
            'https://aws.amazon.com/aws-cost-management/'
        ]
    },
    {
        domain: 'improvement',
        title: 'Monitoring and Observability',
        summary: 'Implementing comprehensive monitoring, logging, and alerting for AWS environments.',
        content: `
            <h4>Amazon CloudWatch</h4>
            <p>Core monitoring and observability service:</p>
            <ul>
                <li><strong>Metrics:</strong> Time-series data about AWS resources and applications</li>
                <li><strong>Logs:</strong> Centralized log aggregation and analysis</li>
                <li><strong>Alarms:</strong> Automated actions based on metric thresholds</li>
                <li><strong>Dashboards:</strong> Visualize metrics and logs</li>
                <li><strong>Events (EventBridge):</strong> Event-driven automation</li>
            </ul>

            <h4>CloudWatch Logs Insights</h4>
            <ul>
                <li>Query and analyze log data with SQL-like syntax</li>
                <li>Pattern detection for anomalies</li>
                <li>Fast, interactive queries across large log datasets</li>
                <li>Visualize query results with charts</li>
            </ul>

            <h4>AWS X-Ray</h4>
            <p>Distributed tracing for application analysis:</p>
            <ul>
                <li>End-to-end view of requests traveling through application</li>
                <li>Service map visualization</li>
                <li>Identify performance bottlenecks</li>
                <li>Trace across Lambda, ECS, EC2, API Gateway</li>
            </ul>

            <h4>CloudWatch Application Insights</h4>
            <ul>
                <li>Automated setup of monitoring for application stacks</li>
                <li>Detects and diagnoses application issues</li>
                <li>ML-powered anomaly detection</li>
                <li>Integrated with Systems Manager OpsCenter</li>
            </ul>

            <h4>Best Practices</h4>
            <ul>
                <li>Use CloudWatch agent for custom metrics and logs</li>
                <li>Set up composite alarms for complex conditions</li>
                <li>Implement structured logging (JSON) for better parsing</li>
                <li>Use CloudWatch Contributor Insights for top talkers</li>
                <li>Enable detailed monitoring for critical resources</li>
                <li>Retain logs based on compliance requirements</li>
                <li>Use metric math for derived metrics</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/cloudwatch/',
            'https://aws.amazon.com/cloudwatch/'
        ]
    },
    {
        domain: 'improvement',
        title: 'AWS Systems Manager',
        summary: 'Unified interface for viewing and controlling AWS infrastructure with automation and operations management.',
        content: `
            <h4>Key Capabilities</h4>
            <ul>
                <li><strong>Fleet Management:</strong> Session Manager (secure shell access), Run Command (execute at scale), Patch Manager, State Manager</li>
                <li><strong>Application Management:</strong> Application Manager, AppConfig, Parameter Store</li>
                <li><strong>Operations Management:</strong> OpsCenter, Incident Manager, Explorer, Automation</li>
                <li><strong>Node Management:</strong> Manage EC2, on-premises servers, VMs</li>
            </ul>

            <h4>Session Manager</h4>
            <ul>
                <li>Secure shell access without SSH keys or bastion hosts</li>
                <li>No inbound ports needed, uses SSM agent</li>
                <li>Session logging to S3 or CloudWatch</li>
                <li>IAM-based access control</li>
            </ul>

            <h4>Parameter Store</h4>
            <ul>
                <li>Secure storage for configuration and secrets</li>
                <li>Standard (free, up to 10,000 parameters) or Advanced (charges apply)</li>
                <li>Encryption with KMS, versioning, TTL</li>
                <li>Integration with CloudFormation, Lambda, EC2</li>
            </ul>

            <h4>Use Cases</h4>
            <ul>
                <li>Patching at scale, configuration management, inventory management, automated operations, secure access</li>
            </ul>
        `,
        links: ['https://docs.aws.amazon.com/systems-manager/']
    },
    {
        domain: 'improvement',
        title: 'AWS Trusted Advisor and Compute Optimizer',
        summary: 'Best practice recommendations and ML-powered optimization for AWS resources.',
        content: `
            <h4>AWS Trusted Advisor</h4>
            <ul>
                <li><strong>Categories:</strong> Cost Optimization, Performance, Security, Fault Tolerance, Service Limits</li>
                <li><strong>Basic/Developer:</strong> 7 core checks</li>
                <li><strong>Business/Enterprise:</strong> All checks + API access</li>
                <li><strong>Key Checks:</strong> S3 bucket permissions, security groups, IAM use, MFA on root, EBS snapshots, RDS backups, service limits</li>
            </ul>

            <h4>AWS Compute Optimizer</h4>
            <ul>
                <li>ML-powered recommendations for optimal AWS compute resources</li>
                <li><strong>Supported:</strong> EC2 instances, Auto Scaling groups, EBS volumes, Lambda functions</li>
                <li>Analyzes historical utilization (CloudWatch metrics)</li>
                <li>Recommendations: downsize, upgrade, change family</li>
                <li>Requires opt-in and CloudWatch agent for enhanced metrics</li>
            </ul>
        `,
        links: ['https://aws.amazon.com/premiumsupport/technology/trusted-advisor/', 'https://aws.amazon.com/compute-optimizer/']
    },
    {
        domain: 'improvement',
        title: 'Auto Scaling Strategies',
        summary: 'Dynamic scaling for EC2, ECS, DynamoDB, and Aurora to match demand and optimize costs.',
        content: `
            <h4>EC2 Auto Scaling</h4>
            <ul>
                <li><strong>Dynamic Scaling:</strong> Target tracking, step, simple scaling</li>
                <li><strong>Predictive Scaling:</strong> ML forecast based on historical patterns</li>
                <li><strong>Scheduled Scaling:</strong> Known patterns</li>
                <li><strong>Warm Pools:</strong> Pre-initialized instances for faster scaling</li>
            </ul>

            <h4>Application Auto Scaling</h4>
            <ul>
                <li>ECS services, DynamoDB, Aurora replicas, AppStream, Lambda provisioned concurrency</li>
                <li>Target tracking, step, scheduled scaling policies</li>
            </ul>

            <h4>Best Practices</h4>
            <ul>
                <li>Use target tracking for most workloads (simplest)</li>
                <li>Combine dynamic + scheduled for predictable patterns</li>
                <li>Set appropriate cooldown periods</li>
                <li>Use multiple metrics for complex scenarios</li>
                <li>Test scaling policies under load</li>
            </ul>
        `,
        links: ['https://docs.aws.amazon.com/autoscaling/']
    },
    {
        domain: 'improvement',
        title: 'AWS Backup and Disaster Recovery',
        summary: 'Centralized backup management and DR strategies for business continuity.',
        content: `
            <h4>AWS Backup</h4>
            <ul>
                <li>Centralized backup across AWS services</li>
                <li><strong>Supported:</strong> EBS, EC2, RDS, Aurora, DynamoDB, EFS, FSx, Storage Gateway, DocumentDB, Neptune</li>
                <li>Backup plans with rules (schedule, retention, lifecycle)</li>
                <li>Backup vaults for organization and access control</li>
                <li>Cross-region and cross-account backup</li>
                <li>Compliance reporting</li>
            </ul>

            <h4>DR Strategies (RTO/RPO)</h4>
            <ul>
                <li><strong>Backup & Restore:</strong> Highest RTO/RPO, lowest cost (hours/days)</li>
                <li><strong>Pilot Light:</strong> Core systems running, scale up when needed (minutes/hours)</li>
                <li><strong>Warm Standby:</strong> Scaled-down version running, scale up (minutes)</li>
                <li><strong>Multi-Site Active-Active:</strong> Lowest RTO/RPO, highest cost (real-time)</li>
            </ul>

            <h4>DR Best Practices</h4>
            <ul>
                <li>Define RPO/RTO requirements</li>
                <li>Automate recovery with CloudFormation/Terraform</li>
                <li>Regular testing of DR procedures</li>
                <li>Use Route 53 health checks for failover</li>
                <li>Cross-region replication for data</li>
            </ul>
        `,
        links: ['https://aws.amazon.com/backup/', 'https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/']
    },
    {
        domain: 'improvement',
        title: 'AWS Well-Architected Framework',
        summary: 'Best practices and design principles for building secure, high-performing, resilient, and efficient infrastructure.',
        content: `
            <h4>Six Pillars</h4>
            <ul>
                <li><strong>Operational Excellence:</strong> Run and monitor systems, continuous improvement</li>
                <li><strong>Security:</strong> Protect data and systems, risk assessment</li>
                <li><strong>Reliability:</strong> Recover from failures, meet demand</li>
                <li><strong>Performance Efficiency:</strong> Use resources efficiently, adapt to change</li>
                <li><strong>Cost Optimization:</strong> Avoid unnecessary costs, optimize spending</li>
                <li><strong>Sustainability:</strong> Minimize environmental impact</li>
            </ul>

            <h4>Well-Architected Tool</h4>
            <ul>
                <li>Review workloads against best practices</li>
                <li>Generate improvement plans</li>
                <li>Track progress over time</li>
                <li>Available in console, API, CLI</li>
            </ul>

            <h4>Key Design Principles</h4>
            <ul>
                <li>Stop guessing capacity needs (elasticity)</li>
                <li>Test at production scale</li>
                <li>Automate architecture experiments</li>
                <li>Allow for evolutionary architectures</li>
                <li>Drive architectures using data</li>
                <li>Improve through game days</li>
            </ul>
        `,
        links: ['https://aws.amazon.com/architecture/well-architected/']
    },
    {
        domain: 'improvement',
        title: 'Performance Optimization Techniques',
        summary: 'Strategies for optimizing application and infrastructure performance on AWS.',
        content: `
            <h4>Compute Optimization</h4>
            <ul>
                <li>Right-size instances (Compute Optimizer)</li>
                <li>Use latest generation instances</li>
                <li>Leverage Graviton processors (40% better price-performance)</li>
                <li>Spot instances for fault-tolerant workloads</li>
            </ul>

            <h4>Storage Optimization</h4>
            <ul>
                <li>EBS: gp3 (better price-performance than gp2), io2 Block Express for highest IOPS</li>
                <li>S3: S3 Transfer Acceleration, byte-range fetches, multipart upload</li>
                <li>EFS: Provisioned/Elastic throughput modes</li>
            </ul>

            <h4>Database Optimization</h4>
            <ul>
                <li>Read replicas for read-heavy workloads</li>
                <li>ElastiCache/DAX for caching</li>
                <li>Connection pooling (RDS Proxy)</li>
                <li>Appropriate indexes and query optimization</li>
            </ul>

            <h4>Network Optimization</h4>
            <ul>
                <li>Enhanced networking (ENA, EFA)</li>
                <li>Placement groups for low latency</li>
                <li>VPC endpoints to avoid NAT Gateway</li>
                <li>CloudFront for content delivery</li>
                <li>Global Accelerator for global apps</li>
            </ul>

            <h4>Caching Strategies</h4>
            <ul>
                <li>CloudFront (edge caching)</li>
                <li>ElastiCache (application caching)</li>
                <li>DAX (DynamoDB caching)</li>
                <li>API Gateway caching</li>
            </ul>
        `,
        links: ['https://docs.aws.amazon.com/wellarchitected/latest/performance-efficiency-pillar/']
    },
    {
        domain: 'improvement',
        title: 'Operational Excellence Practices',
        summary: 'Running and monitoring systems to deliver business value and improve processes.',
        content: `
            <h4>Design Principles</h4>
            <ul>
                <li>Perform operations as code (Infrastructure as Code)</li>
                <li>Make frequent, small, reversible changes</li>
                <li>Refine operations procedures frequently</li>
                <li>Anticipate failure</li>
                <li>Learn from operational failures</li>
            </ul>

            <h4>Infrastructure as Code</h4>
            <ul>
                <li>CloudFormation, CDK, Terraform</li>
                <li>Version control for infrastructure</li>
                <li>Automated deployments</li>
                <li>Consistent environments</li>
            </ul>

            <h4>Runbooks and Playbooks</h4>
            <ul>
                <li>Systems Manager Automation documents</li>
                <li>Document procedures for common tasks</li>
                <li>Automate repetitive tasks</li>
                <li>Incident response procedures</li>
            </ul>

            <h4>Observability</h4>
            <ul>
                <li>CloudWatch for metrics, logs, alarms</li>
                <li>X-Ray for distributed tracing</li>
                <li>CloudTrail for API auditing</li>
                <li>Service Health Dashboard</li>
            </ul>

            <h4>CI/CD Best Practices</h4>
            <ul>
                <li>CodePipeline for orchestration</li>
                <li>CodeBuild for builds</li>
                <li>CodeDeploy for deployments (blue/green, rolling)</li>
                <li>Automated testing at every stage</li>
                <li>Rollback strategies</li>
            </ul>
        `,
        links: ['https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/']
    },
    {
        domain: 'improvement',
        title: 'Security Best Practices',
        summary: 'Protecting data, systems, and assets using AWS security services and best practices.',
        content: `
            <h4>Identity and Access Management</h4>
            <ul>
                <li>Least privilege principle</li>
                <li>MFA for all users</li>
                <li>Roles over access keys</li>
                <li>Regular credential rotation</li>
                <li>IAM Access Analyzer</li>
            </ul>

            <h4>Detective Controls</h4>
            <ul>
                <li>CloudTrail for API logging</li>
                <li>GuardDuty for threat detection</li>
                <li>Security Hub for centralized findings</li>
                <li>Config for compliance monitoring</li>
                <li>VPC Flow Logs for network analysis</li>
            </ul>

            <h4>Infrastructure Protection</h4>
            <ul>
                <li>VPC design (public/private subnets)</li>
                <li>Security groups and NACLs</li>
                <li>AWS WAF for application protection</li>
                <li>Shield for DDoS protection</li>
                <li>Network Firewall for traffic inspection</li>
            </ul>

            <h4>Data Protection</h4>
            <ul>
                <li>Encryption at rest (KMS)</li>
                <li>Encryption in transit (TLS/SSL)</li>
                <li>S3 bucket policies and encryption</li>
                <li>Secrets Manager for credential management</li>
                <li>Macie for sensitive data discovery</li>
            </ul>

            <h4>Incident Response</h4>
            <ul>
                <li>Automated remediation with Lambda/Systems Manager</li>
                <li>EventBridge for event-driven response</li>
                <li>Forensics with snapshots and CloudTrail</li>
                <li>Incident Manager for coordination</li>
            </ul>
        `,
        links: ['https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/']
    },
    {
        domain: 'improvement',
        title: 'Reliability Engineering',
        summary: 'Building resilient systems that can withstand failures and scale to meet demand.',
        content: `
            <h4>Design Principles</h4>
            <ul>
                <li>Test recovery procedures</li>
                <li>Automatically recover from failure</li>
                <li>Scale horizontally</li>
                <li>Stop guessing capacity</li>
                <li>Manage change through automation</li>
            </ul>

            <h4>Foundations</h4>
            <ul>
                <li>Service quotas monitoring</li>
                <li>Network topology design (multi-AZ, multi-region)</li>
                <li>Service limits and scaling plans</li>
            </ul>

            <h4>Change Management</h4>
            <ul>
                <li>Auto Scaling for demand changes</li>
                <li>CloudWatch alarms and dashboards</li>
                <li>Automated testing before deployment</li>
                <li>Blue/green and canary deployments</li>
            </ul>

            <h4>Failure Management</h4>
            <ul>
                <li>Multi-AZ for high availability</li>
                <li>Backup and restore procedures</li>
                <li>Health checks and automated failover</li>
                <li>Circuit breakers and retries with exponential backoff</li>
            </ul>

            <h4>Resilience Patterns</h4>
            <ul>
                <li>Loose coupling (SQS, SNS, EventBridge)</li>
                <li>Graceful degradation</li>
                <li>Throttling and rate limiting</li>
                <li>Idempotency</li>
            </ul>
        `,
        links: ['https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/']
    },
    {
        domain: 'improvement',
        title: 'Cost Management and FinOps',
        summary: 'Advanced cost management strategies including tagging, budgets, and FinOps practices.',
        content: `
            <h4>Cost Visibility</h4>
            <ul>
                <li>Cost Explorer with filters and forecasting</li>
                <li>Cost and Usage Reports (detailed billing data)</li>
                <li>Cost allocation tags (mandatory tagging)</li>
                <li>AWS Budgets with alerts</li>
            </ul>

            <h4>Cost Optimization Tools</h4>
            <ul>
                <li>Compute Optimizer (EC2, Lambda, EBS)</li>
                <li>Trusted Advisor cost checks</li>
                <li>Savings Plans and Reserved Instance recommendations</li>
                <li>S3 Storage Lens for storage optimization</li>
            </ul>

            <h4>FinOps Practices</h4>
            <ul>
                <li>Showback/Chargeback with cost allocation</li>
                <li>Regular cost review meetings</li>
                <li>Cost anomaly detection</li>
                <li>Establish cost KPIs</li>
                <li>Culture of cost awareness</li>
            </ul>

            <h4>Advanced Optimization</h4>
            <ul>
                <li>Spot instances for stateless workloads</li>
                <li>Savings Plans for flexible commitment</li>
                <li>S3 Intelligent-Tiering</li>
                <li>Lifecycle policies for data</li>
                <li>Rightsizing based on utilization</li>
                <li>Delete unattached resources (EBS, EIPs)</li>
            </ul>
        `,
        links: ['https://aws.amazon.com/aws-cost-management/']
    },

    // Domain 4: Migration & Modernization (20%)
    {
        domain: 'migration',
        title: 'The 7 Rs of Migration',
        summary: 'Migration strategies for moving applications to AWS based on business needs and technical requirements.',
        content: `
            <h4>Migration Strategies</h4>

            <h4>1. Rehost (Lift and Shift)</h4>
            <ul>
                <li>Move applications without modifications</li>
                <li>Fastest migration path</li>
                <li>Tools: AWS Application Migration Service, CloudEndure</li>
                <li>Good for: Large legacy migrations, time-sensitive moves</li>
            </ul>

            <h4>2. Replatform (Lift, Tinker, and Shift)</h4>
            <ul>
                <li>Make some cloud optimizations without changing core architecture</li>
                <li>Example: Migrate database to RDS instead of self-managed</li>
                <li>Balance between speed and optimization</li>
            </ul>

            <h4>3. Repurchase (Drop and Shop)</h4>
            <ul>
                <li>Move to SaaS or different product</li>
                <li>Example: Migrate CRM to Salesforce, HR to Workday</li>
                <li>Licensing cost considerations</li>
            </ul>

            <h4>4. Refactor / Re-architect</h4>
            <ul>
                <li>Redesign application for cloud-native features</li>
                <li>Highest upfront cost but best long-term benefits</li>
                <li>Example: Monolith to microservices, move to serverless</li>
                <li>Driven by business need for scalability/performance</li>
            </ul>

            <h4>5. Retire</h4>
            <ul>
                <li>Decommission applications no longer needed</li>
                <li>Reduces attack surface and costs</li>
                <li>Discovered during portfolio assessment</li>
            </ul>

            <h4>6. Retain (Revisit)</h4>
            <ul>
                <li>Keep in source environment for now</li>
                <li>Reasons: Recently upgraded, not ready to migrate, no business value</li>
                <li>Revisit in future migration waves</li>
            </ul>

            <h4>7. Relocate</h4>
            <ul>
                <li>VMware Cloud on AWS - lift and shift VMware workloads</li>
                <li>Minimal downtime</li>
                <li>Retain same tools and processes</li>
            </ul>

            <h4>Choosing the Right Strategy</h4>
            <ul>
                <li>Consider: business goals, technical debt, time constraints, budget</li>
                <li>Portfolio assessment to categorize applications</li>
                <li>Start with low-risk applications</li>
                <li>Mix of strategies for different application tiers</li>
            </ul>
        `,
        links: [
            'https://docs.aws.amazon.com/prescriptive-guidance/latest/migration-strategies/',
            'https://aws.amazon.com/cloud-migration/'
        ]
    },
    {
        domain: 'migration',
        title: 'AWS Migration Services',
        summary: 'Tools and services for planning, executing, and tracking large-scale migrations to AWS.',
        content: `
            <h4>AWS Migration Hub</h4>
            <ul>
                <li>Central location to track migration progress</li>
                <li>Integrate with migration tools (DMS, SMS, CloudEndure)</li>
                <li>Visibility across multiple migrations</li>
                <li>Strategy recommendations</li>
            </ul>

            <h4>AWS Application Migration Service (MGN)</h4>
            <ul>
                <li>Replaces CloudEndure Migration</li>
                <li>Automated lift-and-shift (rehost) for applications</li>
                <li>Continuous replication with minimal downtime</li>
                <li>Works for physical, virtual, and cloud-based servers</li>
                <li>Non-disruptive testing before cutover</li>
            </ul>

            <h4>AWS Database Migration Service (DMS)</h4>
            <ul>
                <li>Migrate databases to AWS with minimal downtime</li>
                <li>Source database remains operational during migration</li>
                <li>Supports homogeneous and heterogeneous migrations</li>
                <li>Continuous replication for CDC (Change Data Capture)</li>
                <li>Schema conversion with AWS SCT for different engines</li>
            </ul>

            <h4>AWS DataSync</h4>
            <ul>
                <li>Accelerated data transfer to/from AWS storage</li>
                <li>Up to 10x faster than open-source tools</li>
                <li>Automatic encryption and data validation</li>
                <li>Use cases: Initial data migration, ongoing replication, data distribution</li>
            </ul>

            <h4>AWS Snow Family</h4>
            <ul>
                <li><strong>Snowcone:</strong> 8TB, portable, rugged (IoT/edge computing)</li>
                <li><strong>Snowball Edge:</strong> 80TB, compute optimized options</li>
                <li><strong>Snowmobile:</strong> 100PB, exabyte-scale data transfer</li>
                <li>For locations with limited connectivity or massive datasets</li>
            </ul>

            <h4>AWS Transfer Family</h4>
            <ul>
                <li>Fully managed SFTP, FTPS, and FTP for S3 and EFS</li>
                <li>No infrastructure to manage</li>
                <li>Integrate with existing authentication systems</li>
            </ul>

            <h4>Migration Best Practices</h4>
            <ul>
                <li>Start with discovery: Application Discovery Service</li>
                <li>Assess dependencies and data flows</li>
                <li>Test migrations thoroughly in non-prod first</li>
                <li>Plan for rollback procedures</li>
                <li>Use AWS Professional Services or Partners for large migrations</li>
            </ul>
        `,
        links: [
            'https://aws.amazon.com/migration-hub/',
            'https://aws.amazon.com/application-migration-service/'
        ]
    },
    {
        domain: 'migration',
        title: 'AWS Database Migration Service (DMS) Deep Dive',
        summary: 'Migrate databases to AWS with minimal downtime using continuous replication.',
        content: `
            <h4>DMS Overview</h4>
            <ul>
                <li>Migrate databases with minimal downtime</li>
                <li>Source stays operational during migration</li>
                <li><strong>Homogeneous:</strong> Same engine (Oracle to Oracle)</li>
                <li><strong>Heterogeneous:</strong> Different engines (Oracle to Aurora) - use SCT first</li>
            </ul>

            <h4>Migration Types</h4>
            <ul>
                <li><strong>Full Load:</strong> One-time migration of existing data</li>
                <li><strong>Full Load + CDC:</strong> Migrate then replicate ongoing changes</li>
                <li><strong>CDC Only:</strong> Replicate only ongoing changes</li>
            </ul>

            <h4>AWS Schema Conversion Tool (SCT)</h4>
            <ul>
                <li>Convert database schema to different engine</li>
                <li>Assesses compatibility and provides conversion report</li>
                <li>Required for heterogeneous migrations</li>
                <li>Not needed for homogeneous (same engine)</li>
            </ul>

            <h4>Use Cases</h4>
            <ul>
                <li>Database consolidation, dev/test migration, disaster recovery, continuous replication</li>
            </ul>
        `,
        links: ['https://aws.amazon.com/dms/']
    },
    {
        domain: 'migration',
        title: 'Hybrid Cloud Architectures',
        summary: 'Patterns for connecting on-premises infrastructure with AWS for hybrid deployments.',
        content: `
            <h4>Connectivity Options</h4>
            <ul>
                <li><strong>Site-to-Site VPN:</strong> Quick setup, encrypted, over internet, up to 1.25 Gbps per tunnel</li>
                <li><strong>Direct Connect:</strong> Dedicated connection, consistent performance, 1-100 Gbps, higher cost</li>
                <li><strong>Direct Connect + VPN:</strong> Encrypted DX connection</li>
            </ul>

            <h4>Storage Integration</h4>
            <ul>
                <li>Storage Gateway (File, Volume, Tape)</li>
                <li>DataSync for migration and ongoing sync</li>
                <li>Snow Family for large data transfers</li>
            </ul>

            <h4>Compute Integration</h4>
            <ul>
                <li>Outposts (AWS infrastructure on-premises)</li>
                <li>VMware Cloud on AWS</li>
                <li>ECS Anywhere/EKS Anywhere</li>
            </ul>

            <h4>Hybrid Patterns</h4>
            <ul>
                <li>Cloud bursting (on-prem primary, cloud for overflow)</li>
                <li>Active-active (workloads across both)</li>
                <li>Backup to cloud</li>
                <li>Gradual migration</li>
            </ul>
        `,
        links: ['https://aws.amazon.com/hybrid/']
    },
    {
        domain: 'migration',
        title: 'Disaster Recovery Strategies',
        summary: 'DR patterns and RPO/RTO considerations for business continuity.',
        content: `
            <h4>DR Strategies by RTO/RPO</h4>
            <ul>
                <li><strong>Backup & Restore:</strong> RTO/RPO hours-days, lowest cost. Use: Archives, compliance</li>
                <li><strong>Pilot Light:</strong> RTO/RPO hours, core always running. Use: Medium criticality apps</li>
                <li><strong>Warm Standby:</strong> RTO/RPO minutes-hours, scaled-down replica. Use: Higher priority apps</li>
                <li><strong>Multi-Site Active-Active:</strong> RTO/RPO seconds-minutes, full capacity. Use: Mission critical</li>
            </ul>

            <h4>DR Components</h4>
            <ul>
                <li>Route 53 health checks and failover</li>
                <li>Aurora Global Database (< 1 sec RPO)</li>
                <li>DynamoDB Global Tables</li>
                <li>S3 Cross-Region Replication</li>
                <li>AWS Backup cross-region</li>
                <li>CloudFormation for infrastructure recreation</li>
            </ul>

            <h4>Testing</h4>
            <ul>
                <li>Regular DR drills (quarterly/annual)</li>
                <li>Document runbooks</li>
                <li>Automate failover processes</li>
                <li>Measure actual RTO/RPO</li>
            </ul>
        `,
        links: ['https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/']
    },
    {
        domain: 'migration',
        title: 'VMware Cloud on AWS',
        summary: 'Run VMware workloads natively on AWS infrastructure with vSphere, vSAN, and NSX.',
        content: `
            <h4>Overview</h4>
            <ul>
                <li>VMware SDDC on AWS bare metal infrastructure</li>
                <li>Same VMware tools and processes</li>
                <li>No refactoring needed (Relocate migration strategy)</li>
                <li>Managed by VMware, runs on AWS</li>
            </ul>

            <h4>Use Cases</h4>
            <ul>
                <li>Migrate VMware workloads to AWS (lift-and-shift)</li>
                <li>Disaster recovery for on-premises VMware</li>
                <li>Hybrid cloud extension</li>
                <li>Data center evacuation</li>
            </ul>

            <h4>Integration with AWS</h4>
            <ul>
                <li>Access to AWS services (S3, RDS, etc.)</li>
                <li>Elastic Network Interfaces for connectivity</li>
                <li>FSx for NetApp ONTAP integration</li>
            </ul>

            <h4>When to Use</h4>
            <ul>
                <li>Large VMware estate</li>
                <li>Rapid migration needed</li>
                <li>Maintain VMware skillset</li>
                <li>Regulatory constraints on refactoring</li>
            </ul>
        `,
        links: ['https://aws.amazon.com/vmware/']
    },
    {
        domain: 'migration',
        title: 'Application Discovery and Migration Planning',
        summary: 'Tools and strategies for discovering applications and planning migrations.',
        content: `
            <h4>AWS Application Discovery Service</h4>
            <ul>
                <li><strong>Agentless:</strong> VMware discovery via vCenter (network, dependencies)</li>
                <li><strong>Agent-based:</strong> Detailed metrics, processes, dependencies</li>
                <li>Export data for planning</li>
                <li>Integration with Migration Hub and Athena</li>
            </ul>

            <h4>Migration Planning Steps</h4>
            <ul>
                <li>1. Discover (inventory applications and dependencies)</li>
                <li>2. Assess (determine migration strategy per app)</li>
                <li>3. Prioritize (based on business value, complexity)</li>
                <li>4. Migrate (execute migration waves)</li>
                <li>5. Validate (test and verify)</li>
                <li>6. Optimize (after migration improvements)</li>
            </ul>

            <h4>Portfolio Assessment</h4>
            <ul>
                <li>Categorize apps by 7 Rs</li>
                <li>Identify dependencies</li>
                <li>Calculate TCO</li>
                <li>Define migration waves</li>
                <li>Risk assessment</li>
            </ul>

            <h4>Migration Hub</h4>
            <ul>
                <li>Track migrations across multiple tools</li>
                <li>Single dashboard for progress</li>
                <li>Integration with MGN, DMS, Server Migration Service</li>
            </ul>
        `,
        links: ['https://aws.amazon.com/application-discovery/']
    },
    {
        domain: 'migration',
        title: 'Large-Scale Data Transfer',
        summary: 'Methods for transferring petabytes of data to AWS efficiently.',
        content: `
            <h4>AWS Snow Family</h4>
            <ul>
                <li><strong>Snowcone:</strong> 8TB, portable, edge computing, 300W power</li>
                <li><strong>Snowball Edge:</strong> 80TB/210TB, compute options available</li>
                <li><strong>Snowmobile:</strong> 100PB, truck-based, for exabyte-scale</li>
                <li>Offline transfer when network impractical</li>
            </ul>

            <h4>AWS DataSync</h4>
            <ul>
                <li>Online data transfer agent</li>
                <li>10x faster than open-source tools</li>
                <li>Transfer to S3, EFS, FSx</li>
                <li>Schedule transfers, data validation</li>
                <li>Bandwidth throttling</li>
            </ul>

            <h4>Transfer Methods Comparison</h4>
            <ul>
                <li><strong>Internet:</strong> GB to TB, good bandwidth</li>
                <li><strong>Direct Connect:</strong> Consistent, ongoing large transfers</li>
                <li><strong>DataSync:</strong> TB scale, ongoing sync</li>
                <li><strong>Snow:</strong> TB to PB, limited/no connectivity</li>
            </ul>

            <h4>Best Practices</h4>
            <ul>
                <li>Calculate time: Data/Bandwidth</li>
                <li>Use Snow if > 1 week transfer time</li>
                <li>Compress before transfer</li>
                <li>Parallel transfers where possible</li>
                <li>Validate data integrity</li>
            </ul>
        `,
        links: ['https://aws.amazon.com/snow/', 'https://aws.amazon.com/datasync/']
    },
    {
        domain: 'migration',
        title: 'Mainframe and Legacy System Migration',
        summary: 'Modernizing mainframe and legacy applications for the cloud.',
        content: `
            <h4>Migration Approaches</h4>
            <ul>
                <li><strong>Replatform:</strong> AWS Mainframe Modernization (automated conversion)</li>
                <li><strong>Refactor:</strong> Rewrite to cloud-native (microservices)</li>
                <li><strong>Retain + Integrate:</strong> Keep mainframe, integrate with AWS</li>
            </ul>

            <h4>AWS Mainframe Modernization</h4>
            <ul>
                <li>Automated conversion of mainframe apps</li>
                <li>Supports COBOL, PL/I, JCL</li>
                <li>Runtime environment on AWS</li>
                <li>Database migration included</li>
            </ul>

            <h4>Legacy Database Migration</h4>
            <ul>
                <li>DMS for supported sources</li>
                <li>SCT for schema conversion</li>
                <li>Consider Aurora PostgreSQL for compatibility</li>
                <li>Babelfish for SQL Server compatibility on Aurora</li>
            </ul>

            <h4>Challenges</h4>
            <ul>
                <li>Lack of documentation</li>
                <li>Complex dependencies</li>
                <li>Skill gaps</li>
                <li>Testing complexity</li>
            </ul>
        `,
        links: ['https://aws.amazon.com/mainframe-modernization/']
    },
    {
        domain: 'migration',
        title: 'Migration Best Practices and Optimization',
        summary: 'Proven patterns and post-migration optimization strategies.',
        content: `
            <h4>Migration Wave Planning</h4>
            <ul>
                <li>Start with low-risk applications (pilot)</li>
                <li>Group by dependencies</li>
                <li>2-4 week sprints per wave</li>
                <li>Learn and adjust between waves</li>
            </ul>

            <h4>Testing Strategy</h4>
            <ul>
                <li>Functional testing in AWS</li>
                <li>Performance testing (load)</li>
                <li>Security testing</li>
                <li>Disaster recovery testing</li>
                <li>User acceptance testing</li>
            </ul>

            <h4>Cutover Planning</h4>
            <ul>
                <li>Define rollback criteria</li>
                <li>Minimize downtime window</li>
                <li>Communication plan</li>
                <li>DNS cutover last</li>
                <li>Parallel run period</li>
            </ul>

            <h4>Post-Migration Optimization</h4>
            <ul>
                <li>Right-size based on actual usage</li>
                <li>Implement Reserved Instances/Savings Plans</li>
                <li>Enable cost allocation tags</li>
                <li>Security posture review</li>
                <li>Leverage managed services (RDS vs EC2 databases)</li>
                <li>Implement Well-Architected review</li>
            </ul>

            <h4>Common Pitfalls</h4>
            <ul>
                <li>Underestimating complexity</li>
                <li>Insufficient testing</li>
                <li>Ignoring dependencies</li>
                <li>Poor cutover planning</li>
                <li>Not optimizing post-migration</li>
            </ul>
        `,
        links: ['https://aws.amazon.com/prescriptive-guidance/']
    }
];

const awsFlashcards = [
    // Organizational Complexity
    {
        domain: 'organizational',
        question: 'What are Service Control Policies (SCPs) and what do they control?',
        answer: 'SCPs are policies that specify the maximum permissions for member accounts in an AWS Organization. They do NOT grant permissions - only limit them. They affect all IAM users and roles but do NOT affect service-linked roles or the management account.'
    },
    {
        domain: 'organizational',
        question: 'What is the difference between AWS Managed Microsoft AD and AD Connector?',
        answer: 'AWS Managed Microsoft AD is actual Active Directory domain controllers managed by AWS in your VPC. AD Connector is just a proxy to your on-premises AD with no data synchronization.'
    },
    {
        domain: 'organizational',
        question: 'How does AWS Control Tower help with multi-account setup?',
        answer: 'Control Tower automates AWS account setup with pre-configured best practices: Landing Zone (baseline multi-account environment), Guardrails (SCPs + Config rules), Account Factory (automated provisioning), and centralized dashboard for visibility.'
    },
    {
        domain: 'organizational',
        question: 'What are the key benefits of using AWS Organizations consolidated billing?',
        answer: 'Single payment method for all accounts, combined usage for volume pricing discounts, shared Reserved Instances and Savings Plans across accounts, and free tier applies across all accounts in the organization.'
    },

    // New Solutions
    {
        domain: 'new-solutions',
        question: 'When would you choose Aurora over standard RDS?',
        answer: 'Choose Aurora for: high performance OLTP workloads (5x MySQL, 3x PostgreSQL), need for many read replicas (up to 15), auto-scaling storage up to 128TB, and built-in multi-AZ replication. Choose RDS for: SQL Server/Oracle/MariaDB, lower cost for small workloads.'
    },
    {
        domain: 'new-solutions',
        question: 'What is the difference between DynamoDB Query and Scan operations?',
        answer: 'Query is efficient - uses partition key (and optionally sort key) to retrieve specific items. Scan reads the entire table sequentially, which is slow and expensive. Always prefer Query over Scan when possible.'
    },
    {
        domain: 'new-solutions',
        question: 'What are the three Lambda invocation types and when to use each?',
        answer: 'Synchronous (API Gateway, ALB) - wait for response. Asynchronous (S3, SNS, EventBridge) - event queued, automatic retries. Stream-based (Kinesis, DynamoDB Streams, SQS) - poll-based invocation.'
    },
    {
        domain: 'new-solutions',
        question: 'What is DynamoDB Accelerator (DAX) and when should you use it?',
        answer: 'DAX is an in-memory cache for DynamoDB providing microsecond latency for cached reads. Use for read-heavy workloads requiring ultra-low latency. No application code changes required - drop-in cache.'
    },
    {
        domain: 'new-solutions',
        question: 'What is Aurora Global Database and what are its benefits?',
        answer: 'Aurora Global Database spans multiple AWS regions with < 1 second cross-region replication. Benefits: disaster recovery with RPO of 1 second, RTO < 1 minute, and low-latency global reads. Secondary regions have up to 16 read replicas.'
    },
    {
        domain: 'new-solutions',
        question: 'What is the difference between Lambda Provisioned Concurrency and Reserved Concurrency?',
        answer: 'Provisioned Concurrency pre-initializes execution environments to reduce cold starts - keeps functions warm. Reserved Concurrency guarantees capacity for a function and prevents other functions from using it - prevents throttling.'
    },

    // Continuous Improvement
    {
        domain: 'improvement',
        question: 'What are the three main cost optimization strategies for EC2?',
        answer: 'Reserved Instances (1-3 year commitment, up to 75% savings), Savings Plans (flexible commitment-based pricing), and Spot Instances (up to 90% discount for interruptible workloads). Also right-sizing and Auto Scaling.'
    },
    {
        domain: 'improvement',
        question: 'What is S3 Intelligent-Tiering and when should you use it?',
        answer: 'S3 Intelligent-Tiering automatically moves objects between access tiers based on usage patterns. Use when you have unknown or changing access patterns. Small monthly monitoring fee but no retrieval fees.'
    },
    {
        domain: 'improvement',
        question: 'What is the difference between CloudWatch Logs and CloudWatch Logs Insights?',
        answer: 'CloudWatch Logs is for log aggregation and storage. CloudWatch Logs Insights is a query service that lets you search and analyze log data using SQL-like syntax, with pattern detection and visualization.'
    },
    {
        domain: 'improvement',
        question: 'What does AWS X-Ray provide for application monitoring?',
        answer: 'X-Ray provides distributed tracing for applications - end-to-end view of requests, service map visualization, performance bottleneck identification, and trace across Lambda, ECS, EC2, API Gateway.'
    },
    {
        domain: 'improvement',
        question: 'How do you reduce data transfer costs in AWS?',
        answer: 'Use CloudFront for caching and reduced data transfer, implement VPC endpoints to avoid NAT Gateway data transfer charges, use S3 Transfer Acceleration for faster uploads, and place NAT Gateway in single AZ for non-critical workloads.'
    },

    // Migration & Modernization
    {
        domain: 'migration',
        question: 'What are the 7 Rs of migration and which is fastest?',
        answer: 'Rehost (fastest - lift and shift), Replatform (lift-tinker-shift), Repurchase (SaaS), Refactor (re-architect), Retire (decommission), Retain (keep as-is), Relocate (VMware Cloud on AWS).'
    },
    {
        domain: 'migration',
        question: 'What is AWS Application Migration Service (MGN) used for?',
        answer: 'MGN (replaces CloudEndure) is used for automated lift-and-shift (rehost) migrations. It provides continuous replication with minimal downtime, works for physical/virtual/cloud servers, and allows non-disruptive testing before cutover.'
    },
    {
        domain: 'migration',
        question: 'When would you use AWS Snow Family instead of DataSync?',
        answer: 'Use Snow Family for: limited/no internet connectivity, massive datasets (TBs to PBs), security requirements for physical transfer. Use DataSync for: good connectivity available, ongoing data sync needs, smaller datasets.'
    },
    {
        domain: 'migration',
        question: 'What is AWS Database Migration Service (DMS) and what makes it useful?',
        answer: 'DMS migrates databases to AWS with minimal downtime. Source database stays operational during migration. Supports homogeneous (same engine) and heterogeneous (different engines) migrations. Includes continuous CDC (Change Data Capture) replication.'
    },
    {
        domain: 'migration',
        question: 'What is the difference between Rehost and Replatform migration strategies?',
        answer: 'Rehost (lift-and-shift): Move without modifications, fastest path. Replatform: Make some cloud optimizations without changing core architecture (e.g., move DB to RDS instead of self-managed). Replatform balances speed with optimization.'
    },

    // Additional Organizational Complexity Cards
    {
        domain: 'organizational',
        question: 'What are the three types of Control Tower guardrails?',
        answer: 'Preventive (SCPs, prevent violations), Detective (AWS Config, detect non-compliance), and by enforcement: Mandatory (always enforced), Strongly Recommended (best practices), Elective (optional).'
    },
    {
        domain: 'organizational',
        question: 'What resources can be shared using AWS Resource Access Manager (RAM)?',
        answer: 'VPC subnets, Transit Gateway, Route 53 Resolver rules, License Manager configs, Aurora DB clusters, and more. Enables resource sharing within AWS Organizations without duplication.'
    },
    {
        domain: 'organizational',
        question: 'What is a Launch Constraint in AWS Service Catalog?',
        answer: 'A Launch Constraint specifies the IAM role used when provisioning a product. This allows users without direct AWS permissions to launch approved products using a service role.'
    },
    {
        domain: 'organizational',
        question: 'What is the difference between AWS Organizations Tag Policies and SCPs?',
        answer: 'Tag Policies enforce standardized tagging across accounts. SCPs limit maximum permissions for IAM users/roles. Both are governance tools but serve different purposes - tagging vs permissions.'
    },

    // Compute & Containers Cards
    {
        domain: 'new-solutions',
        question: 'What are EC2 Placement Groups and when to use each type?',
        answer: 'Cluster (same rack, low latency for HPC), Partition (spread across logical partitions for distributed systems like Hadoop), Spread (separate hardware, max 7 per AZ for critical instances).'
    },
    {
        domain: 'new-solutions',
        question: 'What is the difference between ECS EC2 Launch Type and Fargate?',
        answer: 'EC2 Launch Type: You manage EC2 instances, more control, cheaper at scale. Fargate: Serverless, AWS manages infrastructure, pay per vCPU/memory, easier operations.'
    },
    {
        domain: 'new-solutions',
        question: 'What is IRSA in Amazon EKS?',
        answer: 'IAM Roles for Service Accounts (IRSA) provides fine-grained IAM permissions to Kubernetes pods. Each pod can have its own IAM role with specific permissions instead of node-level permissions.'
    },
    {
        domain: 'new-solutions',
        question: 'When should you use AWS Batch vs Lambda?',
        answer: 'Batch: Long-running jobs (> 15 min), large-scale parallel processing, Docker containers, HPC workloads. Lambda: Event-driven, < 15 min, pay-per-invocation, simpler workloads.'
    },
    {
        domain: 'new-solutions',
        question: 'What is the difference between Step Functions Standard and Express workflows?',
        answer: 'Standard: Long-running (up to 1 year), exactly-once, auditable, $0.025/1K transitions. Express: High-volume (up to 5 min), at-least-once, cheaper, priced by executions and duration.'
    },
    {
        domain: 'new-solutions',
        question: 'What is EventBridge Pipes vs EventBridge rules?',
        answer: 'Pipes: Point-to-point integration (Source → Filter/Enrich → Target), no rules needed. Rules: Event pattern matching with multiple targets per rule. Pipes are simpler for direct integrations.'
    },

    // Database Cards
    {
        domain: 'new-solutions',
        question: 'What is RDS Proxy and when should you use it?',
        answer: 'RDS Proxy is a fully managed database proxy for connection pooling, reducing database connections. Use for Lambda functions, connection-heavy apps, improves failover time by 66%, enforces IAM auth.'
    },
    {
        domain: 'new-solutions',
        question: 'When should you use Redis vs Memcached in ElastiCache?',
        answer: 'Redis: Advanced data structures, persistence, replication, pub/sub, multi-AZ, backups. Memcached: Simple key-value, multi-threaded, horizontal scaling, no persistence. Redis for most use cases.'
    },
    {
        domain: 'new-solutions',
        question: 'What is the difference between DocumentDB and DynamoDB?',
        answer: 'DocumentDB: MongoDB-compatible, document database, SQL-like queries, JSON documents, Aurora-like architecture. DynamoDB: Key-value/document, NoSQL, single-digit ms latency, serverless, different query patterns.'
    },
    {
        domain: 'new-solutions',
        question: 'When should you use Amazon Neptune?',
        answer: 'Use Neptune for highly connected data with complex relationships: social networks, fraud detection, knowledge graphs, recommendation engines, network topology. Not for simple tabular data.'
    },

    // Storage & Networking Cards
    {
        domain: 'new-solutions',
        question: 'What are the S3 Glacier storage classes and their retrieval times?',
        answer: 'Glacier Instant Retrieval (milliseconds, 90-day min), Glacier Flexible Retrieval (minutes-hours, 90-day min), Glacier Deep Archive (12-hour retrieval, 180-day min, lowest cost).'
    },
    {
        domain: 'new-solutions',
        question: 'What is the difference between EFS and FSx for Lustre?',
        answer: 'EFS: General-purpose NFS, Linux workloads, web serving, CMS. FSx for Lustre: High-performance computing, machine learning, video processing, 100s GB/s throughput, integrates with S3.'
    },
    {
        domain: 'new-solutions',
        question: 'What is AWS Storage Gateway File Gateway used for?',
        answer: 'Provides NFS/SMB interface to S3. Files stored as S3 objects with local cache for frequently accessed data. Use for NFS/SMB file share backed by S3, tiering to cloud storage.'
    },
    {
        domain: 'new-solutions',
        question: 'What is the difference between VPC Gateway Endpoint and Interface Endpoint?',
        answer: 'Gateway Endpoint: S3 and DynamoDB only, free, uses route table. Interface Endpoint: All other services, PrivateLink, ENI with private IP, costs $0.01/hour per AZ.'
    },
    {
        domain: 'new-solutions',
        question: 'What is AWS Transit Gateway and what problem does it solve?',
        answer: 'Acts as cloud router connecting thousands of VPCs and on-premises networks through a single gateway. Replaces complex VPC peering meshes with hub-and-spoke topology.'
    },
    {
        domain: 'new-solutions',
        question: 'What are Direct Connect Virtual Interfaces (VIFs)?',
        answer: 'Private VIF (connect to VPC private resources), Public VIF (connect to AWS public services like S3 without internet), Transit VIF (connect to Transit Gateway for multiple VPCs).'
    },
    {
        domain: 'new-solutions',
        question: 'What is the difference between Route 53 CNAME and Alias records?',
        answer: 'CNAME: Standard DNS, cannot use for zone apex, charges apply. Alias: AWS-specific, works with zone apex, free, automatic health checks, preferred for AWS resources.'
    },
    {
        domain: 'new-solutions',
        question: 'When should you use CloudFront vs Global Accelerator?',
        answer: 'CloudFront: Cacheable content (images, videos), HTTP/HTTPS only, edge caching. Global Accelerator: Non-HTTP (TCP/UDP), dynamic content, gaming, IoT, VoIP, uses AWS network for performance.'
    },

    // Integration & Analytics Cards
    {
        domain: 'new-solutions',
        question: 'What is the difference between API Gateway REST API and HTTP API?',
        answer: 'HTTP API: 70% cheaper, lower latency, simpler, OAuth 2.0/OIDC, CORS. REST API: Full-featured, API keys, usage plans, request/response transformation. Use HTTP for new APIs unless need REST features.'
    },
    {
        domain: 'new-solutions',
        question: 'What is the SQS + SNS fan-out pattern?',
        answer: 'Publish once to SNS topic, delivered to multiple SQS queues. Each subscriber processes independently. Use for parallel processing, multiple downstream systems, loose coupling.'
    },
    {
        domain: 'new-solutions',
        question: 'When should you use Kinesis Data Streams vs Kinesis Data Firehose?',
        answer: 'Data Streams: Real-time (< 1s), multiple consumers, replay data, custom processing. Data Firehose: Near real-time (60s min), simple load to destinations (S3, Redshift), auto-scaling, no shard management.'
    },
    {
        domain: 'new-solutions',
        question: 'What is Redshift Spectrum?',
        answer: 'Query data directly in S3 without loading into Redshift. Separate compute for S3 queries, support for Parquet/ORC/JSON/CSV. Use for querying hot+cold data together, archive old data to S3.'
    },
    {
        domain: 'new-solutions',
        question: 'What is the difference between AWS Glue and AWS Lake Formation?',
        answer: 'Glue: Serverless ETL, data cataloging, schema discovery. Lake Formation: Data lake governance, centralized security, fine-grained access control (column/row level), ACID transactions on S3.'
    },

    // Continuous Improvement Cards
    {
        domain: 'improvement',
        question: 'What is AWS Systems Manager Session Manager?',
        answer: 'Secure shell access without SSH keys or bastion hosts. No inbound ports needed, uses SSM agent. Session logging to S3/CloudWatch, IAM-based access control.'
    },
    {
        domain: 'improvement',
        question: 'What is the difference between AWS Trusted Advisor and Compute Optimizer?',
        answer: 'Trusted Advisor: 5 categories of checks (cost, performance, security, fault tolerance, limits), Business/Enterprise for all checks. Compute Optimizer: ML-powered recommendations specifically for EC2, ASG, EBS, Lambda sizing.'
    },
    {
        domain: 'improvement',
        question: 'What are the 4 disaster recovery strategies in order of RTO/RPO?',
        answer: 'From highest to lowest RTO/RPO: 1) Backup & Restore (hours-days), 2) Pilot Light (hours), 3) Warm Standby (minutes-hours), 4) Multi-Site Active-Active (seconds-minutes).'
    },
    {
        domain: 'improvement',
        question: 'What are the six pillars of the AWS Well-Architected Framework?',
        answer: 'Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability.'
    },
    {
        domain: 'improvement',
        question: 'What is the difference between EC2 Auto Scaling Dynamic vs Predictive scaling?',
        answer: 'Dynamic: React to current demand (target tracking, step, simple). Predictive: ML forecast based on historical patterns, proactively scale before demand. Use together for best results.'
    },

    // Migration Cards
    {
        domain: 'migration',
        question: 'What is AWS Schema Conversion Tool (SCT) and when is it needed?',
        answer: 'SCT converts database schema to different engine for heterogeneous migrations. Provides compatibility assessment and conversion report. Required for migrations like Oracle to Aurora. Not needed for same-engine migrations.'
    },
    {
        domain: 'migration',
        question: 'What are the three DMS migration types?',
        answer: 'Full Load (one-time migration), Full Load + CDC (migrate then replicate ongoing changes), CDC Only (replicate only ongoing changes). Choose based on downtime tolerance and data volume.'
    },
    {
        domain: 'migration',
        question: 'When should you use AWS Snow Family vs DataSync?',
        answer: 'Snow: Limited/no connectivity, massive datasets (TBs-PBs), physical security needs. DataSync: Good connectivity, ongoing sync needs, smaller datasets, 10x faster than open-source tools.'
    },
    {
        domain: 'migration',
        question: 'What is VMware Cloud on AWS used for?',
        answer: 'Run VMware workloads natively on AWS without refactoring. Same VMware tools (vSphere, vSAN, NSX). Use for: lift-and-shift of VMware estate, DR, hybrid cloud, rapid migration with minimal changes.'
    },
    {
        domain: 'migration',
        question: 'What is AWS Application Discovery Service?',
        answer: 'Discovers on-premises applications and dependencies for migration planning. Agentless (VMware via vCenter) or Agent-based (detailed metrics). Integrates with Migration Hub and Athena for analysis.'
    },
    {
        domain: 'migration',
        question: 'What is the difference between Snowball Edge and Snowcone?',
        answer: 'Snowcone: 8TB, ultra-portable, lightweight, edge computing, 300W power. Snowball Edge: 80TB/210TB, ruggedized, compute options available, more capacity. Choose based on data size and portability needs.'
    }
];

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { awsTopics, awsFlashcards };
}
